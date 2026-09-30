import { motion } from "framer-motion";
import {
  Play,
  Zap,
  ScanLine,
  ShoppingBag,
  Leaf,
  ChevronRight,
} from "lucide-react";

import lifestyleImage from "../../assets/images/lifestyle-experience.png";

import "../styles/lifestyle-experience.css";

const features = [
  {
    icon: Zap,
    title: "Smarter",
    subtitle: "In-Aisle Experience",
  },
  {
    icon: ScanLine,
    title: "Real-Time",
    subtitle: "Offers & Rewards",
  },
  {
    icon: ShoppingBag,
    title: "A More Enjoyable",
    subtitle: "Shopping Trip",
  },
  {
    icon: Leaf,
    title: "Designed for",
    subtitle: "Every Shopper",
  },
];

function LifestyleExperience() {
  return (
    <section className="lifestyle-experience" id="experience">
      <div className="lifestyle-shell">
        {/* IMAGE */}
        <div className="lifestyle-background">
          <img
            src={lifestyleImage}
            alt="Shopper using a Hey!Carts smart trolley"
          />

          <div className="lifestyle-overlay" />
        </div>

        {/* CONTENT */}
        <motion.div
          className="lifestyle-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="lifestyle-eyebrow">
            SHOPPING, REIMAGINED
          </span>

          <h2>
            Technology
            <br />
            that feels part
            <br />
            of <span>the journey.</span>
          </h2>

          <p>
            Hey!Carts blends smart technology with everyday shopping,
            making each trip simpler, faster and more enjoyable.
          </p>

          <a href="#how-it-works" className="lifestyle-watch">
            <span className="lifestyle-play">
              <Play size={17} fill="currentColor" />
            </span>

            Watch how it works
          </a>
        </motion.div>

        {/* FEATURE BAR */}
        <motion.div
          className="lifestyle-features"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="lifestyle-feature" key={feature.subtitle}>
                <div className="feature-icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <div className="feature-copy">
                  <span>{feature.title}</span>
                  <strong>{feature.subtitle}</strong>
                </div>

                <ChevronRight
                  className="feature-arrow"
                  size={18}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default LifestyleExperience;