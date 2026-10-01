import { motion } from "framer-motion";
import {
  ArrowRight,
  UserRound,
  Store,
  Megaphone,
  Search,
  Gift,
  Heart,
  TrendingUp,
  UsersRound,
  Coins,
  Target,
  BarChart3,
  BadgePercent,
  Gamepad2,
} from "lucide-react";

import experienceHero from "../../assets/images/lifestyle-experience.png";

import shoppersImage from "../../assets/images/value/shoppers.png";
import supermarketsImage from "../../assets/images/value/supermarkets.png";
import brandsImage from "../../assets/images/value/brands.png";

import discover from "../../assets/images/journey/discover.png";

import "../styles/experience.css";

const audiences = [
  {
    title: "Shoppers",
    eyebrow: "A MORE REWARDING JOURNEY",
    description:
      "A smarter, more engaging shopping experience built around the way people already shop.",
    image: shoppersImage,
    icon: UserRound,
    benefits: [
      {
        icon: Search,
        title: "Discover relevant products and offers",
      },
      {
        icon: Gift,
        title: "Unlock offers, games and rewards",
      },
      {
        icon: Heart,
        title: "Enjoy a more engaging shopping trip",
      },
    ],
  },
  {
    title: "Supermarkets",
    eyebrow: "A SMARTER STORE EXPERIENCE",
    description:
      "Turn existing trolley fleets into a new digital layer for engagement, activation and retail media.",
    image: supermarketsImage,
    icon: Store,
    benefits: [
      {
        icon: Coins,
        title: "Create a new retail media opportunity",
      },
      {
        icon: UsersRound,
        title: "Improve the shopper experience",
      },
      {
        icon: TrendingUp,
        title: "Support product visibility and sales",
      },
    ],
  },
  {
    title: "Brands",
    eyebrow: "BE PART OF THE JOURNEY",
    description:
      "Reach shoppers directly inside the store through relevant and measurable in-aisle experiences.",
    image: brandsImage,
    icon: Megaphone,
    benefits: [
      {
        icon: Target,
        title: "Reach shoppers at relevant moments",
      },
      {
        icon: BadgePercent,
        title: "Activate offers and campaigns in-store",
      },
      {
        icon: BarChart3,
        title: "Measure engagement and campaign impact",
      },
    ],
  },
];

function Experience() {
  return (
    <main className="experience-page">
      {/* =================================
          HERO
      ================================= */}

      <section className="experience-hero" id="experience">
        <div className="experience-hero-shell">
          <div className="experience-hero-background">
            <img
              src={experienceHero}
              alt="Shopper using the Hey!Carts smart trolley"
            />

            <div className="experience-hero-overlay" />
          </div>

          <motion.div
            className="experience-hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="experience-eyebrow">
              EXPERIENCE
            </span>

            <h1>
              A smarter
              <br />
              <span>experience</span>
              <br />
              for everyone.
            </h1>

            <p>
              Hey!Carts turns a simple supermarket visit into a more engaging,
              rewarding and valuable shopping experience — for shoppers,
              supermarkets and brands.
            </p>

            <a
              href="#experience-value"
              className="experience-primary-button"
            >
              See It In Action
              <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* =================================
          VALUE FOR EVERYONE
      ================================= */}

      <section
        className="experience-value"
        id="experience-value"
      >
        <div className="experience-container">
          <motion.div
            className="experience-value-heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div>
              <span className="experience-eyebrow">
                BUILT FOR EVERYONE
              </span>

              <h2>
                Creating value
                <br />
                across the <span>journey.</span>
              </h2>
            </div>

            <p>
              One platform. Three connected experiences. Hey!Carts brings
              shoppers, supermarkets and brands together inside the shopping
              journey.
            </p>
          </motion.div>

          <div className="experience-audience-grid">
            {audiences.map((audience, index) => {
              const MainIcon = audience.icon;

              return (
                <motion.article
                  className="experience-audience-card"
                  key={audience.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="experience-audience-image">
                    <img
                      src={audience.image}
                      alt={`${audience.title} experience with Hey!Carts`}
                    />
                  </div>

                  <div className="experience-audience-body">
                    <div className="experience-audience-icon">
                      <MainIcon size={24} strokeWidth={1.8} />
                    </div>

                    <span className="experience-audience-eyebrow">
                      {audience.eyebrow}
                    </span>

                    <h3>{audience.title}</h3>

                    <p className="experience-audience-description">
                      {audience.description}
                    </p>

                    <div className="experience-benefits">
                      {audience.benefits.map((benefit) => {
                        const BenefitIcon = benefit.icon;

                        return (
                          <div
                            className="experience-benefit"
                            key={benefit.title}
                          >
                            <span>
                              <BenefitIcon
                                size={17}
                                strokeWidth={2}
                              />
                            </span>

                            <strong>
                              {benefit.title}
                            </strong>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================
          INTERACTIVE SHOPPING
      ================================= */}

      <section className="experience-interactive">
        <div className="experience-interactive-shell">
          <motion.div
            className="experience-interactive-copy"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="experience-eyebrow">
              INTERACTIVE SHOPPING
            </span>

            <h2>
              Every step brings
              <br />
              <span>something new.</span>
            </h2>

            <p>
              From discovering products to exploring offers, interactive ads,
              games and rewards — Hey!Carts keeps shoppers engaged throughout
              the journey.
            </p>

            <div className="experience-feature-list">
              <div className="experience-feature-row">
                <Search size={21} />

                <div>
                  <strong>Browse Products</strong>
                  <span>
                    Explore categories and featured products.
                  </span>
                </div>

                <ArrowRight size={17} />
              </div>

              <div className="experience-feature-row">
                <BadgePercent size={21} />

                <div>
                  <strong>View Offers</strong>
                  <span>
                    Discover daily and weekly promotions.
                  </span>
                </div>

                <ArrowRight size={17} />
              </div>

              <div className="experience-feature-row">
                <Megaphone size={21} />

                <div>
                  <strong>Interactive Ads</strong>
                  <span>
                    See relevant brand content during the trip.
                  </span>
                </div>

                <ArrowRight size={17} />
              </div>

              <div className="experience-feature-row">
                <Gamepad2 size={21} />

                <div>
                  <strong>Play & Win</strong>
                  <span>
                    Enjoy simple games and unlock rewards.
                  </span>
                </div>

                <ArrowRight size={17} />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="experience-interactive-visual"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src={discover}
              alt="Hey!Carts product discovery interface"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Experience;