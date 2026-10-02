import { motion } from "framer-motion";
import {
  Heart,
  Megaphone,
  Coins,
} from "lucide-react";

import aboutPurposeImage from "../../assets/images/about/about-purpose.png";
import "../styles/about-purpose.css";

const purposePoints = [
  {
    icon: Heart,
    title: "More value for shoppers",
    text: "A more useful, engaging and rewarding shopping journey.",
  },
  {
    icon: Megaphone,
    title: "More engagement for brands",
    text: "Reach shoppers directly inside the store at relevant moments.",
  },
  {
    icon: Coins,
    title: "More revenue for supermarkets",
    text: "Create a new digital retail media opportunity from existing trolley fleets.",
  },
];

function AboutPurpose() {
  return (
    <section className="about-purpose">
      <div className="about-purpose-shell">
        <motion.div
          className="about-purpose-visual"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src={aboutPurposeImage}
            alt="Shopper using Hey!Carts inside a supermarket"
          />
        </motion.div>

        <motion.div
          className="about-purpose-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="about-purpose-eyebrow">
            OUR PURPOSE
          </span>

          <h2>
            A smarter store
            <br />
            for <span>everyone.</span>
          </h2>

          <p className="about-purpose-intro">
            We connect shoppers, supermarkets and brands through a simple,
            engaging and useful in-store experience, turning everyday shopping
            into something more rewarding.
          </p>

          <div className="about-purpose-points">
            {purposePoints.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  className="about-purpose-point"
                  key={point.title}
                >
                  <div className="about-purpose-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPurpose;