import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const initialValues = { name: "", surname: "", email: "", description: "" };
  const [data, setData] = useState(initialValues);

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <div className="contact-box">
        <h2>Contact US</h2>
        <form onSubmit={handleSubmit}>
          <div className="contact-container-box">
            <input
              type="text"
              name="name"
              required=""
              value={data.name}
              onChange={handleChange}
            />
            <label>Name</label>
          </div>
          <div className="contact-container-box">
            <input
              type="text"
              name="surname"
              required=""
              value={data.surname}
              onChange={handleChange}
            />
            <label>Surname</label>
          </div>
          <div className="contact-container-box">
            <input
              type="email"
              name="email"
              required=""
              value={data.email}
              onChange={handleChange}
            />
            <label>Email</label>
          </div>
          <div className="contact-container-box">
            <input
              type="text"
              name="description"
              required=""
              value={data.description}
              onChange={handleChange}
            />
            <label>Description</label>
          </div>
          <a href="/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>

        <div className="contactItem">
          <span className="contactTitle">FOLLOW US</span>
          <div className="contactSocial">
            <i className="contactIcon fab fa-facebook-square"></i>
            <i className="contactIcon fab fa-instagram-square"></i>
            <i className="contactIcon fab fa-pinterest-square"></i>
            <i className="contactIcon fab fa-twitter-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
