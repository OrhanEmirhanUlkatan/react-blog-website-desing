import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutItem">
        <span className="aboutTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1550151733-f2bc199db8fc?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTM1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="aboutItem">
        <span className="aboutTitle">CATEGORIES</span>
        <ul className="aboutList">
          <li className="aboutListItem">Life</li>
          <li className="aboutListItem">Music</li>
          <li className="aboutListItem">Style</li>
          <li className="aboutListItem">Sport</li>
          <li className="aboutListItem">Tech</li>
          <li className="aboutListItem">Cinema</li>
        </ul>
      </div>
      <div className="aboutItem">
        <span className="aboutTitle">FOLLOW US</span>
        <div className="aboutSocial">
          <i className="aboutIcon fab fa-facebook-square"></i>
          <i className="aboutIcon fab fa-instagram-square"></i>
          <i className="aboutIcon fab fa-pinterest-square"></i>
          <i className="aboutIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default About;
