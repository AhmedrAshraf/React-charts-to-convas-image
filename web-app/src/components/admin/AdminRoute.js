// Guidance from "https://www.youtube.com/watch?v=PKwu15ldZ7k"
// With help from Oliver Hardman
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { GridLoader } from "react-spinners";

export default function AdminRoute({ component: Component, ...rest }) {
  const [id, updateID] = useState(null);

  // Implemetation of useAuthStateHook
  const [user, loading] = useAuthState(auth, {
    onUserChanged: async (newUser) => {
      // Option to access custom claims once the user loads with the useAuthStateHook (ReadMe.md here: "https://github.com/CSFrequency/react-firebase-hooks/blob/master/auth/README.md")
      updateID(await newUser.getIdTokenResult()); // Waits for the firebase API to return the users JWT and then updates the id const declared above
    },
  });

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading || id == null) {
          // While loading to see if a user is logged in show a loading screen
          return (
            <div className="hero is-fullheight">
              <div className="hero-body">
                <div className="container">
                  <div className="columns is-centered">
                    <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                      <GridLoader color={"#4A90E2"} loading={true} size={100} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        if (user) {
          if (id.claims.admin) {
            return <Component {...props} />; // If the user is an admin return the desired component
          } else {
            return <Redirect to="/" />; // Return the user back to their dashboard if there is no admin claim
          }
        } else {
          return <Redirect to="/login" />; // If no user is logged in redirect to the login page
        }
      }}
    ></Route>
  );
}
