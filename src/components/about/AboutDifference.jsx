import { motion } from "framer-motion";
import {
  ShoppingCart,
  Gamepad2,
  BarChart3,
  Network,
} from "lucide-react";

import "../styles/about-difference.css";

const differenceItems = [
  {
    icon: ShoppingCart,
    title: "In-Store Focus",
    text: "Right where purchase decisions happen.",
  },
  {
    icon: Gamepad2,
    title: "Engaging Experience",
    text: "Offers, games and rewards designed for real shoppers.",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    text: "Track engagement, campaign performance and sales impact.",
  },
  {
    icon: Network,
    title: "Scalable Platform",
    text: "Built to expand from one store to larger retail networks.",
  },
];

function AboutDifference() {
  return (
    <section className="about-difference">
      <div className="about-difference-container">
        <motion.div
          className="about-difference-copy"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="about-difference-eyebrow">
            WHAT MAKES US DIFFERENT
          </span>

          <h2>
            Real impact
            <br />
            inside <span>real stores.</span>
          </h2>

          <p>
            Hey!Carts is not just another screen in the store. It is a
            purpose-built in-store retail media platform designed around real
            shopping behaviour, useful shopper experiences and measurable
            business results.
          </p>
        </motion.div>

        <div className="about-difference-grid">
          {differenceItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="about-difference-card"
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.58,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="about-difference-icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutDifference;