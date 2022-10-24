import React from "react";
import "./write.css";

const Write = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-image">
            <h2 className="card-heading">
              Get started
              <small>Let us create your story</small>
            </h2>
          </div>
          <form className="card-form">
            <div className="input">
              <input type="text" className="input-field" required />
              <label className="input-label">Title</label>
            </div>
            <div className="input">
              <input type="text" className="input-field" required />
              <label className="input-label">Description</label>
            </div>

            <div className="action">
              <button className="action-button">Share Story</button>
            </div>
          </form>
          <div className="card-info">
            <div className="writeItem">
              <span className="writeTitle">FOLLOW US</span>
              <div className="writeSocial">
                <i className="writeIcon fab fa-facebook-square"></i>
                <i className="writeIcon fab fa-instagram-square"></i>
                <i className="writeIcon fab fa-pinterest-square"></i>
                <i className="writeIcon fab fa-twitter-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
