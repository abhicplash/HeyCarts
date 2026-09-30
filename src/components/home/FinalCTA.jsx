import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import finalCTAImage from "../../assets/images/final-cta.png";

import "../styles/final-cta.css";

function FinalCTA() {
  return (
    <section className="final-cta" id="partner">
      <div className="final-cta-shell">
        <div className="final-cta-background">
          <img
            src={finalCTAImage}
            alt="Hey!Carts smart trolley in a supermarket"
          />

          <div className="final-cta-overlay" />
        </div>

        <motion.div
          className="final-cta-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="final-cta-eyebrow">
            LET&apos;S BUILD A SMARTER RETAIL EXPERIENCE
          </span>

          <h2>
            Smarter trolleys
            <br />
            for brighter
            <br />
            <span>tomorrows.</span>
          </h2>

          <p>
            Bring a more engaging, measurable and rewarding shopping
            experience into your stores.
          </p>

          <div className="final-cta-actions">
            <a href="#contact" className="final-cta-primary">
              Partner With Us
              <ArrowRight size={18} />
            </a>

            <a href="#how-it-works" className="final-cta-secondary">
              See How It Works

              <span className="final-cta-play">
                <Play size={14} fill="currentColor" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;