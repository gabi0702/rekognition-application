import { Link } from "react-router-dom";
import React from "react";
import "../pages/Home.css";
import logo from "../img/logo.png";
const Appbar = () => {
  return (
    <>
      <header class="header">
        <div className="dv-center">
          <Link to="/">
            <img
              className="logo-design"
              src={logo}
              alt="befit-logo"
              width="80px"
              height="80px"
            />
          </Link>

          <nav class="top-nav">
            <Link class="btn" to="/">
              Home
            </Link>
            <Link class="btn" to="/places">
              Our Places
            </Link>
            <Link class="btn" to="/customers">
              Customers
            </Link>
            <Link class="btn" to="/visitors">
              Visitors
            </Link>
            <Link class="btn" to="/rekognition">
              Rekognition
            </Link>
            <Link class="btn" to="/about">
              About Us
            </Link>

            {/* 
          <Link class="btn" to="/notFound">
            Not Found
          </Link> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Appbar;
