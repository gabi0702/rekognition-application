import { Link } from "react-router-dom";
import React from "react";
import Appbar from "../widgets/Appbar";
const ContactUs = () => {
  return (
    <>
      <Appbar />
      <section class="about">
        <div class="about-content">
          <h2>Contact Us</h2>
          <p>
            At BE FIT Pilates Institute, we are dedicated to helping you achieve
            your fitness goals...
          </p>
          <Link class="btn">Contact</Link>
        </div>
      </section>

      <div className="dv-center-footer">
        <p class="footer">
          &copy; 2023 BE FIT Pilates Institute. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default ContactUs;
