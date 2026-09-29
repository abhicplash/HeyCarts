import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import heroBgDesktop from "../../assets/images/hero-bg-desktop.png";
import heroBgMobile from "../../assets/images/hero-bg-mobile.png";

import "../styles/home.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <picture className="hero-background">
        <source
          media="(max-width: 650px)"
          srcSet={heroBgMobile}
        />

        <img
          src={heroBgDesktop}
          alt=""
          aria-hidden="true"
        />
      </picture>

      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Retail media,
            <br />
            built into the
            <br />
            <span>shopping journey.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            A smarter trolley that turns every store visit into a more engaging,
            valuable experience for shoppers and brands.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <a href="#partner" className="hero-primary">
              Partner With Us
              <ArrowRight size={18} />
            </a>

            <a href="#how-it-works" className="hero-secondary">
              <span className="hero-play">
                <Play size={15} fill="currentColor" />
              </span>

              See How It Works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;