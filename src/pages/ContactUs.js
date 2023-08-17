import React, { useState } from "react";
import { Link } from "react-router-dom";
import Appbar from "../widgets/Appbar";
import "./ContactUs.css";
const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const [thanks, setThanks] = useState("");

  const handleSend = () => {
    setThanks("Your request as been sent! We will be in touch shortly!");
    // You can implement sending logic here
    console.log("Sending:", name, email, phone);
    // Clear fields and close popup
    setName("");
    setEmail("");
    setPhone("");
    togglePopup();
  };

  return (
    <div>
      <Appbar />

      <div className="contact-content">
        <h2>Contact Us</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          className="contact-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="contact-input"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
          className="contact-input"
        />
        <button className="send-button" onClick={handleSend}>
          Send
        </button>
        <div>{thanks}</div>
      </div>

      <div className="footer-container">
        <p className="footer">
          &copy; 2023 BE FIT Pilates Institute. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
