import yellow from "../img/yellow-line.png";
import "./Hero.css";

export default function HeroSection() {
  return (
    <>
      <div className="hero-container">
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
      <div className="launch">
        <h3>Launch Your Own Sustainable Fashion Line With Aura Canvas</h3>
        <button>
          <h3>Sign Up</h3>
        </button>
      </div>
    </>
  );
}
