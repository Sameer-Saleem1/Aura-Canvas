import React from "react";
import "./Benefits.css";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";
import logo4 from "../img/logo4.png";
import logo5 from "../img/logo5.png";

function Benefits() {
  return (
    <>
      <div className="benefits-container">
        <div className="heading">
          <h1 className="benefits">
            Our Benefits <br />
            <span>for Celebs/Influencers</span>
          </h1>
        </div>
        <div className="benefit-card-container">
          <div className="benefit-card">
            <p>Zero Investment</p>
            <div className="image">
              <img src={logo1} alt="" style={{ marginTop: "1.5rem" }} />
            </div>
          </div>

          <div className="benefit-card">
            <p>
              PRODUCT <br /> DEVELOPMENT & DESIGN
            </p>
            <div className="image">
              <img src={logo2} alt="" />
            </div>
          </div>

          <div className="benefit-card">
            <p>
              PRODUCT <br /> MARKET FIT
            </p>
            <div className="image">
              <img src={logo3} alt="" />
            </div>
          </div>

          <div className="benefit-card">
            <p style={{ marginBottom: "0" }}>
              COMPANY <br /> BUILDING AND IT’S <br /> STRUCTURE
            </p>
            <div className="image" style={{ marginTop: "1.5rem" }}>
              <img src={logo4} alt="" />
            </div>
          </div>

          <div className="benefit-card">
            <p>
              BUILD YOUR <br />
              BRAND
            </p>
            <div className="image">
              <img src={logo5} alt="" />
            </div>
          </div>
        </div>
        <div className="empower">
          <h2>
            EMPOWER YOUR VOICE, BUILD YOUR BRAND: LAUNCH <br /> YOUR OWN BRAND
            BRAND WITH AURA CANVAS
          </h2>
        </div>
      </div>
    </>
  );
}

export default Benefits;
