import { motion } from "framer-motion";

import startSession from "../../assets/images/journey/start-session.png";
import discover from "../../assets/images/journey/discover.png";
import offers from "../../assets/images/journey/offers.png";
import scan from "../../assets/images/journey/scan.png";
import play from "../../assets/images/journey/play.png";
import reward from "../../assets/images/journey/reward.png";

import "../styles/shopper-journey.css";

const journeySteps = [
  {
    number: "1",
    title: "Start Session",
    text: "Log in and start your smart shopping session in seconds.",
    image: startSession,
  },
  {
    number: "2",
    title: "Discover",
    text: "Explore products, categories and personalised recommendations.",
    image: discover,
  },
  {
    number: "3",
    title: "Offers",
    text: "Get real-time deals and exclusive offers as you shop.",
    image: offers,
  },
  {
    number: "4",
    title: "Scan",
    text: "Scan items effortlessly as you add them to your cart.",
    image: scan,
  },
  {
    number: "5",
    title: "Play",
    text: "Take part in fun challenges and unlock exciting rewards.",
    image: play,
  },
  {
    number: "6",
    title: "Reward",
    text: "Earn points and redeem them for great benefits.",
    image: reward,
  },
];

function ShopperJourney() {
  return (
    <section className="shopper-journey" id="how-it-works">
      <div className="journey-container">
        <motion.div
          className="journey-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="journey-eyebrow">
            THE SHOPPER JOURNEY
          </span>

          <h2>
            From hello
            <br />
            to <span>rewards.</span>
          </h2>

          <p>
            A seamless journey that turns every trip into a smarter,
            more rewarding shopping experience.
          </p>
        </motion.div>

        <div className="journey-steps">
          <div className="journey-line" />

          {journeySteps.map((step, index) => (
            <motion.article
              className="journey-step"
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="journey-image">
                <img src={step.image} alt={`Hey!Carts ${step.title}`} />
              </div>

              <div className="journey-number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopperJourney;