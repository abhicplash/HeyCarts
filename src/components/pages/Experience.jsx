import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import experienceHero from "../../assets/images/lifestyle-experience.png";

import "../styles/experience.css";

function Experience() {
  return (
    <main className="experience-page">
      {/* =================================
          HERO
      ================================= */}

      <section className="experience-hero" id="experience">
        <div className="experience-hero-shell">
          <div className="experience-hero-background">
            <img
              src={experienceHero}
              alt="Shopper using the Hey!Carts smart trolley"
            />

            <div className="experience-hero-overlay" />
          </div>

          <motion.div
            className="experience-hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="experience-eyebrow">
              EXPERIENCE
            </span>

            <h1>
              A smarter
              <br />
              <span>experience</span>
              <br />
              for everyone.
            </h1>

            <p>
              Hey!Carts turns a simple supermarket visit into a more engaging,
              rewarding and valuable shopping experience — for shoppers,
              supermarkets and brands.
            </p>

            <a
              href="#experience-value"
              className="experience-primary-button"
            >
              See It In Action
              <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Experience;