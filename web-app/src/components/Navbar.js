import { useHistory } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signOut as signOutAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./static/css/navBar.css";
import logo from "./static/images/logo.png";
import deco from "./static/images/deco.png";
import signOut from "./static/images/signOut.png";
import { useState } from "react";

const Navbar = () => {
  let history = useHistory();
  const [id, updateID] = useState(null);
  // Implemetation of useAuthStateHook
  const [user] = useAuthState(auth, {
    onUserChanged: async (newUser) => {
      // Option to access custom claims once the user loads with the useAuthStateHook (ReadMe.md here: "https://github.com/CSFrequency/react-firebase-hooks/blob/master/auth/README.md")
      updateID(await newUser.getIdTokenResult()); // Waits for the firebase API to return the users JWT and then updates the id const declared above
    },
  });

  const logout = async () => {
    signOutAuth(auth).then(() => {
      alert("logged out");
      console.log(auth.currentUser);
      history.push("/login");
    });
  };

  // If a user is logged in show the nav-bar
  if (user) {
    // if the user is an admin show the admin version of the nav-bar
    if (id.claims.admin) {
      return (
        <nav className="navBar">
          <img src={logo} alt="logo" className="navLogo" />
          <img src={deco} alt="deco" className="navDeco" />
          <ul className="navList">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/goals">Goals</a>
            </li>
            <li>
              <a href="/usage">Usage</a>
            </li>
            <div className="dropdown">
              <button className="dropbtn">KPI's</button>
              <div className="dropdown-content">
                <li>
                  <a href="/EFD">Energy flow diagram</a>
                </li>
                <li>
                  <a href="/EFC">Energy forecast cost</a>
                </li>
              </div>
            </div>
            <li>
              <a href="/fileUpload">Upload Data</a>
            </li>
            <li>
              <a href="/createAccount">Create Account</a>
            </li>
            <li>
              <button type="button" onClick={logout}>
                <img src={signOut} alt="signOut" className="navSignOut" />
              </button>
            </li>
          </ul>
        </nav>
      );
    }
    // else show the user version of the nav-bar
    else {
      return (
        <nav className="navBar">
          <img src={logo} alt="logo" className="navLogo" />
          <img src={deco} alt="deco" className="navDeco" />
          <ul className="navList">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/goals">Goals</a>
            </li>
            <li>
              <a href="/usage">Usage</a>
            </li>
            <div className="dropdown">
              <button className="dropbtn">KPI's</button>
              <div className="dropdown-content">
                <li>
                  <a href="/EFD">Energy flow diagram</a>
                </li>
                <li>
                  <a href="/EFC">Energy forecast cost</a>
                </li>
              </div>
            </div>
            <li>
              <button type="button" onClick={logout}>
                <img src={signOut} alt="signOut" className="navSignOut" />
              </button>
            </li>
          </ul>
        </nav>
      );
    }
  }
};

export default Navbar;
