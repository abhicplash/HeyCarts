import { motion } from "framer-motion";
import {
  ArrowRight,
  LogIn,
  Search,
  BadgePercent,
  ScanLine,
  Gamepad2,
  Gift,
} from "lucide-react";

import heroImage from "../../assets/images/how-it-works/how-hero.png";

import startSession from "../../assets/images/journey/start-session.png";
import discover from "../../assets/images/journey/discover.png";
import offers from "../../assets/images/journey/offers.png";
import scan from "../../assets/images/journey/scan.png";
import play from "../../assets/images/journey/play.png";
import reward from "../../assets/images/journey/reward.png";

import lifestyleImage from "../../assets/images/lifestyle-experience.png";

import "../styles/how-it-works.css";

const steps = [
  {
    number: "01",
    title: "Start Session",
    subtitle: "A simple beginning.",
    text:
      "Shoppers start a session directly from the trolley console. No personal details, just slide and start shopping.",
    image: startSession,
    icon: LogIn,
  },
  {
    number: "02",
    title: "Discover",
    subtitle: "Products become easier to find.",
    text:
      "Explore categories, discover featured products and view relevant content while you shop.",
    image: discover,
    icon: Search,
  },
  {
    number: "03",
    title: "Offers",
    subtitle: "Relevant offers at the right moment.",
    text:
      "Get daily and weekly offers, brand promotions and personalised recommendations.",
    image: offers,
    icon: BadgePercent,
  },
  {
    number: "04",
    title: "Scan",
    subtitle: "Interact with products instantly.",
    text:
      "Use the built-in camera to scan product barcodes and get more information, offers and suggestions.",
    image: scan,
    icon: ScanLine,
  },
  {
    number: "05",
    title: "Play",
    subtitle: "Shopping becomes more engaging.",
    text:
      "Enjoy simple games like bubble pop and unlock a scratch-card reward each session.",
    image: play,
    icon: Gamepad2,
  },
  {
    number: "06",
    title: "Reward",
    subtitle: "End the journey with value.",
    text:
      "Unlock rewards, offers or exclusive brand benefits before completing your shopping trip.",
    image: reward,
    icon: Gift,
  },
];

function HowItWorks() {
  return (
    <main className="how-page">
      {/* HERO */}
      <section className="how-hero">
        <div className="how-hero-shell">
          <div className="how-hero-bg">
            <img
              src={heroImage}
              alt="Hey!Carts smart trolley shopping experience"
            />

            <div className="how-hero-overlay" />
          </div>

          <motion.div
            className="how-hero-content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="how-eyebrow">
              HOW IT WORKS
            </span>

            <h1>
              One trolley.
              <br />
              One journey.
              <br />
              <span>More possibilities.</span>
            </h1>

            <p>
              Hey!Carts transforms the traditional supermarket trolley into an
              interactive shopping experience — from the moment you start till
              the final reward.
            </p>

            <a href="#journey" className="how-button">
              See the Full Journey
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SHOPPER JOURNEY */}
      <section className="how-journey" id="journey">
        <div className="how-container">
          <motion.div
            className="how-journey-header"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <span className="how-eyebrow">
                THE SHOPPER JOURNEY
              </span>

              <h2>
                From first touch
                <br />
                to <span>reward.</span>
              </h2>

              <p className="how-heading-description">
                Six simple moments create one connected,
                <br />
                engaging in-store journey.
              </p>
            </div>

            <p className="how-journey-intro">
              Hey!Carts keeps shoppers informed, entertained and rewarded —
              right on the trolley console, while they shop naturally.
            </p>
          </motion.div>

          <div className="how-grid">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  className="how-card"
                  key={step.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                  }}
                >
                  <div className="how-card-media">
                    <img
                      src={step.image}
                      alt={`Hey!Carts ${step.title}`}
                    />

                    <span className="how-number">
                      {step.number}
                    </span>
                  </div>

                  <div className="how-card-content">
                    <span className="how-card-icon">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>

                    <h3>{step.title}</h3>

                    <strong>{step.subtitle}</strong>

                    <p>{step.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="how-closing">
        <div className="how-closing-shell">
          <div className="how-closing-bg">
            <img
              src={lifestyleImage}
              alt="Shopper using Hey!Carts"
            />

            <div className="how-closing-overlay" />
          </div>

          <motion.div
            className="how-closing-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className="how-eyebrow">
              BUILT INTO REAL SHOPPING BEHAVIOUR
            </span>

            <h2>
              Technology that works
              <br />
              <span>while people shop.</span>
            </h2>

            <p>
              Hey!Carts adds digital engagement without changing the natural
              way shoppers move through the store.
            </p>

            <a href="/#partner" className="how-button">
              Partner With Us
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default HowItWorks;