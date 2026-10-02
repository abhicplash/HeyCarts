import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import aboutFinalCTA from "../../assets/images/about/about-final-cta.png";
import "../styles/about-final-cta.css";

function AboutFinalCTA() {
  return (
    <section className="about-final-cta">
      <div className="about-final-cta-shell">
        <div className="about-final-cta-background">
          <img
            src={aboutFinalCTA}
            alt="Hey!Carts smart trolley inside a supermarket"
          />

          <div className="about-final-cta-overlay" />
        </div>

        <motion.div
          className="about-final-cta-content"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="about-final-cta-eyebrow">
            BUILD THE NEXT SHOPPING EXPERIENCE
          </span>

          <h2>
            Ready to bring
            <br />
            <span>Hey!Carts</span> into
            <br />
            your stores?
          </h2>

          <p>
            Turn existing supermarket trolleys into a smarter in-store
            experience for shoppers, retailers and brands.
          </p>

          <div className="about-final-cta-actions">
            <a href="/#partner" className="about-final-cta-primary">
              Partner With Us
              <ArrowRight size={17} />
            </a>

            <a href="/how-it-works" className="about-final-cta-secondary">
              See How It Works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutFinalCTA;
