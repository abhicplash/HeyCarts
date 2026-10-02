import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import aboutHero from "../../assets/images/about/about-hero.png";
import "../styles/about-hero.css";

function AboutHero() {
  return (
    <section className="about-hero" id="about">
      <div className="about-hero-background">
        <img
          src={aboutHero}
          alt="Hey!Carts smart trolley inside a supermarket"
        />

        <div className="about-hero-overlay" />
      </div>

      <motion.div
        className="about-hero-content"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span className="about-hero-eyebrow">
          ABOUT HEY!CARTS
        </span>

        <h1>
          Built to make
          <br />
          shopping <span>smarter.</span>
        </h1>

        <p>
          Hey!Carts transforms existing supermarket trolleys into a smarter
          in-store experience for shoppers, retailers and brands.
        </p>

        <a href="#about-story" className="about-hero-button">
          Discover Our Story
          <ArrowRight size={17} />
        </a>
      </motion.div>
    </section>
  );
}

export default AboutHero;