import React from "react";
import "./Brand.css";
import brand from "../img/brand.png";
import makeup from "../img/makeup.png";
import girl from "../img/girl.png";
import { Link } from "react-router-dom";

export default function Brand() {
  return (
    <div className="brand-container">
      <div className="left">
        <div className="journey">
          <h1>
            Start your brand <br /> journey.
          </h1>
          <p>
            Join the sustainable fashion revolution with zero Invesment and
            expert support. Let your passion become your brand.
          </p>
          <button>book a meeting</button>
        </div>
        <div className="left-images">
          <div>
            <img src={makeup} alt="" />
          </div>
          <div>
            <img src={girl} alt="" />
          </div>
        </div>
      </div>
      <div className="brand-img">
        <img src={brand} alt="brand image" />
      </div>
    </div>
  );
}
