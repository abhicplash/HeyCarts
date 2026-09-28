import "../styles/navbar.css";
import logo from "../../assets/logos/HeyCartsHori.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img src={logo} alt="Hey!Carts" />
        </a>

        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>

        <a href="/partner" className="navbar-cta">
          Partner With Us
        </a>
      </div>
    </header>
  );
}

export default Navbar;
