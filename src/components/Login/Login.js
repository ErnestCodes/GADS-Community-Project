import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Login/Login.css";
import { auth } from "../Firebase/firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // console.log(email);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // This means it succefully created a new user with email and password
        // console.log(auth);

        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="img/abacusis~2.jpg" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the Abacus Conditions of use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Intrest-Based Ads
          Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Abacus Account
        </button>
      </div>
    </div>
  );
}

export default Login;
