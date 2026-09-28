

import '../styles/home.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label">
            HEY!CARTS
          </span>

          <h1>
            Retail media
            <br />
            that moves with
            <br />
            the shopper.
          </h1>

          <p>
            Transform everyday supermarket trolleys into connected shopper touchpoints.
          </p>

          <div className="hero-actions">
            <a href="#product" className="primary-btn">
              Explore Hey!Carts
            </a>

            <a href="#contact" className="secondary-btn">
              Partner With Us
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <span>Product visual goes here</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;