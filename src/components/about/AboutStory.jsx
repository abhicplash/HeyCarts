import { motion } from "framer-motion";
import {
  Wrench,
  Store,
  UsersRound,
} from "lucide-react";

import aboutStoryImage from "../../assets/images/about/about-story.png";
import "../styles/about-story.css";

const storyPoints = [
  {
    icon: Wrench,
    title: "Retrofit, not replace",
    text: "Works with existing supermarket trolleys, reducing the need for major infrastructure changes.",
  },
  {
    icon: Store,
    title: "Built for real stores",
    text: "Designed around the realities of modern supermarkets, busy aisles and everyday operations.",
  },
  {
    icon: UsersRound,
    title: "Designed around shoppers",
    text: "Simple, intuitive and engaging for the people already using the trolley.",
  },
];

function AboutStory() {
  return (
    <section className="about-story" id="about-story">
      <div className="about-story-container">
        <motion.div
          className="about-story-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="about-story-eyebrow">
            WHY HEY!CARTS
          </span>

          <h2>
            Built around the
            <br />
            <span>shopping journey.</span>
          </h2>

          <p className="about-story-intro">
            Hey!Carts began with a simple idea: instead of changing how people
            shop, improve the trolley they already use. By adding a smart
            console to existing supermarket trolleys, we create a new digital
            layer inside the store without disrupting the natural shopping
            experience.
          </p>

          <div className="about-story-points">
            {storyPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  className="about-story-point"
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                >
                  <div className="about-story-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <h3>{point.title}</h3>

                  <p>{point.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="about-story-visual"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src={aboutStoryImage}
            alt="Existing supermarket trolley retrofitted with the Hey!Carts console"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutStory;