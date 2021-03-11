import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //this stop to refresh
    //do the logic of login

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault(); //stop to refresh

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user and logged in , redirect to homepage...
        history.push("/");
      })

      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          {/* onCLick={login} */}
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          Et nonumy elitr duo dolor vero est magna amet voluptua Es stund'
          gezagt stund' der du helle denkst duder du helle denkst du
        </p>
        {/* onCLick={register} */}
        <button onClick={register} className="login__registerButton">
          Create your amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
