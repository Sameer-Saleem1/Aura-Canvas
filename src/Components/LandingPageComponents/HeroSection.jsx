import yellow from "./img/yellow-line.png";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div>
        <h1>
          sign up today and <br /> launch your <br /> brand
        </h1>
        <img src={yellow} alt="" />
        <h3>Empower Your Voice, Build Your Brand</h3>
      </div>
    </div>
  );
}
