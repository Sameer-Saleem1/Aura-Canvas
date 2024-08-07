import React from "react";
import art from "../img/art.png";
import art1 from "../img/art1.png";
import art2 from "../img/art2.png";
import "./Manufacture.css";

function Manufacture() {
  return (
    <div className="manufacture-container">
      <div className="partner">
        <h1>
          are you a manufacturer, PRODUCT SUPPLIER, DESIGN FIRM, PACKAGING
          SUPPLIER, LOGISTIC AND OPERATIONS OR SOURCING MEDIATOR.
        </h1>
        <p>
          Join Aura Canvas as Partner and unlock endless possibilities for your
          business. Collaborate with us to create amazing brands, captivate
          customers, and unleash your potential. Together, we'll reshape the
          world of brands. Join us in this revolution with creator-led D2C
          brands creation. Let your passion become your brand.
        </p>
        <button>book a meeting</button>
      </div>
      <div className="manufacture-right">
        <div className="art">
          <img src={art} alt="" />
        </div>
        <div className="art-pic">
          <div>
            <img src={art1} alt="" />
          </div>
          <div>
            <img src={art2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manufacture;
