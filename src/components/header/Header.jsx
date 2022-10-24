import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="headerImg"
        alt=""
      />
    </div>
  );
};

export default Header;
