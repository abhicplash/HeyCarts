import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import aboutVisionImage from "../../assets/images/about/about-vision.png";
import "../styles/about-vision.css";

function AboutVision() {
  return (
    <section className="about-vision">
      <div className="about-vision-shell">
        <motion.div
          className="about-vision-visual"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src={aboutVisionImage}
            alt="Shopper using Hey!Carts inside a modern supermarket"
          />
        </motion.div>

        <motion.div
          className="about-vision-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="about-vision-eyebrow">
            OUR VISION
          </span>

          <h2>
            A smarter future
            <br />
            for <span>in-store shopping.</span>
          </h2>

          <p>
            We envision a future where every supermarket trolley becomes a
            smarter platform — creating more value for shoppers, retailers and
            brands while keeping the shopping experience simple and natural.
          </p>

          <a href="/#partner" className="about-vision-button">
            Join the Journey
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutVision;