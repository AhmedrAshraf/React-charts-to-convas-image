// Importing necessary libraries
import { useState } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../firebaseConfig";
import { FormCheck } from "react-bootstrap";

export default function CreateAccount() {
  const [user, setUser] = useState(null); // Allowing react state to track the user variable
  const [password, setPassword] = useState(null); // Allowing react state to track the password variable
  const [businessName, setBusiness] = useState(null); // Allowing react state to track the business variable
  const [admin, setAdmin] = useState(null);

  const createAccount = async () => {
    const createAccount = httpsCallable(functions, "admin-createAccount"); // Calling the users-createAccount cloud function we made

    // Passing the needed variables to the cloud function
    await createAccount({
      businessName: businessName,
      email: user,
      password: password,
      newAdmin: admin,
    });
  };

  // Handles the events of then a Username input is changing
  const handleUser = (event) => {
    setUser(event.target.value);
  };

  // Handles the events of then a Password input is changing
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  // Handles the events of then a Business input is changing
  const handleBusiness = (event) => {
    setBusiness(event.target.value);
  };

  const handleAdmin = (event) => {
    setAdmin(event.target.checked);
  };
  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form className="box">
                <h1 className="title is-1">Create Account</h1>
                <div className="field">
                  <label htmlFor="username" className="label">
                    Username
                  </label>
                  <div className="control has-icons-left">
                    <input
                      type="email"
                      id="userEmail"
                      className="userEmail input is-small"
                      onChange={handleUser} // onChange uses the React handleUser function above
                      placeholder="Enter Your Email"
                      autoComplete="off"
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="password" className="label">
                    Password
                  </label>

                  <div className="control has-icons-left">
                    <input
                      type="password"
                      id="userPassword"
                      className="userPassword input is-small"
                      placeholder="Enter Your Password"
                      onChange={handlePassword} // onChange uses the React handlePassword function above
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="BusinessName" className="label">
                    Business Name
                  </label>
                  <div className="control has-icons-left">
                    <input
                      type="text"
                      id="businessName"
                      className="businessName input is-small"
                      placeholder="Enter Your Business Name"
                      onChange={handleBusiness} // onChange uses the React handleBusiness function above
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-building"></i>
                    </span>
                  </div>
                  <div className="mt-3">
                    <label> Admin? </label>
                    <FormCheck onChange={handleAdmin} className="adminCheck" />
                  </div>
                </div>

                <button
                  type="button"
                  className="button is-link m-1"
                  onClick={createAccount}
                >
                  {/*onClick uses the React createAccount function above*/}
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
