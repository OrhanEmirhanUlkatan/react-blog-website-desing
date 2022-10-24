/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="https://www.facebook.com">
            <i className="topIcon fab fa-facebook-square"></i>
          </a>
          <a href="https://www.facebook.com">
            <i className="topIcon fab fa-instagram-square"></i>
          </a>
          <a href="https://www.facebook.com">
            <i className="topIcon fab fa-twitter-square"></i>
          </a>
          <a href="https://www.facebook.com">
            <i className="topIcon fab fa-pinterest-square"></i>
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Contact</a>
          </li>
          <li className="list-inline-item">
            <a href="#">About</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p className="copyright">Company Name © 2022</p>
      </footer>
    </div>
  );
};

export default Footer;
