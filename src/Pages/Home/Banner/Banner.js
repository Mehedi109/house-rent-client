import React from "react";
import "./Banner.css";
import banner from "../../../images/img-8.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-image">
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="banner-heading">
        <h2 className="mb-4">Need a home for rent?</h2>
        <h3>Find your desired home in here</h3>
      </div>
    </div>
  );
};

export default Banner;
