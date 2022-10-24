/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <>
      <div className="signup">
        <div className="signup-connect">
          <h1>Create your account</h1>
          <a href="#" className="btn btn-social btn-facebook">
            <i class="fab fa fa-facebook-f"></i>Sign in with Facebook
          </a>

          <a href="#" className="btn btn-social btn-twitter">
            <i class="fab fa fa-twitter"></i> Sign in with Twitter
          </a>
          <a href="#" className="btn btn-social btn-google">
            <i class="fab fa fa-google"></i> Sign in with Google
          </a>
          <a href="#" className="btn btn-social btn-linkedin">
            <i class="fab fa fa-linkedin-in"></i> Sign in with Linkedin
          </a>
        </div>
        <div className="signup-classic">
          <h2>Or use the classical way</h2>
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
            <Link to="/login">
              <a href="" className="loginBtn">
                Login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
