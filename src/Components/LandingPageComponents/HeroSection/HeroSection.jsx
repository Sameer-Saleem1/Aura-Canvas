import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import yellow from "../img/yellow-line.png";
import "./Hero.css";
import "../BuildBrand/Brand.css";

export default function HeroSection() {
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  useEffect(() => {
    // Function to handle scroll events and update state accordingly
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const { top, bottom } = heroSection.getBoundingClientRect();
        setIsInHeroSection(top >= 0 && bottom <= window.innerHeight);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div id="hero-section" className="hero-container">
        <div className="hero-image"></div>
        <div>
          <h1>
            WELCOME TO THE <br /> <span> future </span> of <br />{" "}
            <span>CREATOR-LED</span> D2C <br /> BRANDS{" "}
          </h1>
          <img src={yellow} alt="" />
          <h3>Empower Your Voice, Build Your Brand</h3>
        </div>
      </div>

      {/* Launch Section */}
      <div className="launch">
        <h3>Launch Your Own Sustainable Fashion Line With Aura Canvas</h3>
        {/* Conditionally render the button based on isInHeroSection */}
        {isInHeroSection && (
          <Link to={"./signup"}>
            <button>
              <h3>Sign Up</h3>
            </button>
          </Link>
        )}
      </div>

      {/* Button with fixed position */}
      {!isInHeroSection && (
        <div className="brand-img">
          <div className={`brand-button ${isInHeroSection ? "visible" : ""}`}>
            <Link to={"./signup"}>
              <button>
                <h3>Sign Up</h3>
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
