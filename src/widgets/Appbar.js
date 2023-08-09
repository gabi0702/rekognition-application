import { Link } from "react-router-dom";
import React from "react";

const Appbar = () => {
  return (
    <>
      <div>
        <div>
          <Link class="btn" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link class="btn" to="/products">
            Products
          </Link>
        </div>
        <div>
          <Link class="btn" to="/categories">
            Categories
          </Link>
        </div>
        <div>
          <Link class="btn" to="/rekognition">
            Rekognition
          </Link>
        </div>
        <div>
          <Link class="btn" to="/notFound">
            Not Found
          </Link>
        </div>
      </div>
    </>
  );
};

export default Appbar;
