import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="signup">
        <div className="signup-classic">
          <h2>Login</h2>
          <form className="form">
            <fieldset className="username">
              <input type="text" placeholder="username" />
            </fieldset>
            <fieldset className="email">
              <input type="email" placeholder="email" />
            </fieldset>
            <fieldset className="password">
              <input type="password" placeholder="password" />
            </fieldset>
            <button type="submit" className="btn">
              Sign up
            </button>
          </form>
          <div>
            <Link to="/register">
              <a href="#" className="registerBtn">
                Register
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
