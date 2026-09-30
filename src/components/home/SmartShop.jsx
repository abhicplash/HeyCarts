import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import smartShopImage from "../../assets/images/smart-shop.png";
import "../styles/smart-shop.css";

function SmartShop() {
  return (
    <section className="smart-shop" id="experience">
      <div className="smart-shop-container">
        <motion.div
          className="smart-shop-copy"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="smart-shop-eyebrow">
            THE HEY!CARTS TROLLEY
          </span>

          <h2>
            A smarter
            <br />
            way to <span>shop.</span>
          </h2>

          <p>
            A shopper-facing console that brings discovery, offers,
            interaction and rewards directly into the shopping journey.
          </p>

          <a href="#how-it-works" className="smart-shop-link">
            Explore the Experience
            <ArrowRight size={19} />
          </a>
        </motion.div>

        <motion.div
          className="smart-shop-visual"
          initial={{ opacity: 0, x: 90, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src={smartShopImage}
            alt="Hey!Carts smart trolley console"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default SmartShop;