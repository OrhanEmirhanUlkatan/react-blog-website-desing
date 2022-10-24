import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
  const [isSearch, setIsSearch] = useState("");

  const handleSearch = () => {
    setIsSearch(!isSearch);
  };
  return (
    <div className="topbar">
      <div className="topLeft">
        <a href="https://www.facebook.com">
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <a href="https://www.twitter.com">
          <i className="topIcon fab fa-twitter-square"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
        <a href="https://www.pinterest.com">
          <i className="topIcon fab fa-pinterest-square"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to="">
            <li className="topListItem">HOME</li>
          </Link>
          <Link to="/about">
            <li className="topListItem">ABOUT</li>
          </Link>
          <Link to="/contact">
            <li className="topListItem">CONTACT</li>
          </Link>
          <Link to="/write">
            <li className="topListItem">WRITE</li>
          </Link>
          <Link to="/register">
            <li className="topListItem">REGISTER</li>
          </Link>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.unsplash.com/photo-1652394871044-dec10bff6158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          alt=""
        />
        {isSearch ? (
          <input
            className="searchInput"
            type="search"
            placeholder="Search..."
          />
        ) : (
          <i onClick={handleSearch} className="topSearchIcon fas fa-search"></i>
        )}
        <button className="logoutBtn">LOGOUT</button>
      </div>
    </div>
  );
};

export default Topbar;
