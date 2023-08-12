import { Link } from "react-router-dom";
import React from "react";
import Appbar from "../widgets/Appbar";
const Home = () => {
  return (
    <>
      <Appbar />
      <section class="about">
        <div class="about-content">
          <h2>About Us</h2>
          <p>
            At BE FIT Pilates Institute, we are dedicated to helping you achieve
            your fitness goals...
          </p>
          <Link class="btn">Read More</Link>
        </div>
      </section>
      <section class="classes">
        <div class="classes-content">
          <h2>Our Classes</h2>
          <p>
            Choose from a variety of Pilates classes designed to meet your
            fitness needs...
          </p>
          <Link href="#" class="btn">
            View Classes
          </Link>
        </div>
      </section>

      <section class="instructors">
        <div class="instructors-content">
          <h2>Meet Our Instructors</h2>
          <p>
            Our experienced instructors are dedicated to helping you achieve
            your fitness goals...
          </p>
          <Link href="#" class="btn">
            Meet the Instructors
          </Link>
        </div>
      </section>

      <section class="contact">
        <div class="contact-content">
          <h2>Contact Us</h2>
          <p>Have questions or want to get started? Reach out to us today...</p>
          <Link href="#" class="btn">
            Contact Us
          </Link>
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

export default Home;
