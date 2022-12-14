// Guidance from "https://www.youtube.com/watch?v=PKwu15ldZ7k"
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { GridLoader } from "react-spinners";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [user, loading] = useAuthState(auth); // Implenetation of useAuthStateHook

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading) {
          // While loading to see if a user is logged in show a loading screen
          return (
            <div className="hero is-fullheight">
              <div className="hero-body">
                <div className="container">
                  <div className="columns is-centered">
                    <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                      <GridLoader
                        color={"#4A90E2"}
                        loading={loading}
                        size={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }

        if (user) {
          return <Component {...props} />; // If there is a user logged in show the required component
        } else {
          return <Redirect to="/login" />; // If no user is logged in redirect to the login page
        }
      }}
    ></Route>
  );
}
