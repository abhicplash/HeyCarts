import { motion } from "framer-motion";
import {
  Tag,
  Store,
  UserRound,
  Target,
  BarChart3,
  TrendingUp,
  Coins,
  UsersRound,
  Search,
  Gift,
  Heart,
} from "lucide-react";

import brandsImage from "../../assets/images/value/brands.png";
import supermarketsImage from "../../assets/images/value/supermarkets.png";
import shoppersImage from "../../assets/images/value/shoppers.png";

import "../styles/value-for-everyone.css";

const cards = [
  {
    title: "Brands",
    subtitle: "TURN FOOTFALL INTO IMPACT",
    icon: Tag,
    image: brandsImage,
    items: [
      {
        icon: Target,
        title: "Targeted in-store visibility",
        text: "Reach the right shoppers at the right moment.",
      },
      {
        icon: BarChart3,
        title: "Contextual campaigns",
        text: "Deliver relevant, real-time messages in the aisle.",
      },
      {
        icon: TrendingUp,
        title: "Measurable engagement",
        text: "See real impact with clear insights and reporting.",
      },
    ],
  },
  {
    title: "Supermarkets",
    subtitle: "A STRONGER, SMARTER STORE",
    icon: Store,
    image: supermarketsImage,
    items: [
      {
        icon: Coins,
        title: "New retail media revenue",
        text: "Unlock an additional, high-margin revenue stream.",
      },
      {
        icon: UsersRound,
        title: "Smarter customer experience",
        text: "Create a more engaging and modern store environment.",
      },
      {
        icon: Store,
        title: "Digital in-store activation",
        text: "Easily activate and manage campaigns across your stores.",
      },
    ],
  },
  {
    title: "Shoppers",
    subtitle: "A MORE REWARDING JOURNEY",
    icon: UserRound,
    image: shoppersImage,
    items: [
      {
        icon: Search,
        title: "Relevant discovery",
        text: "Find products and offers that match your interests.",
      },
      {
        icon: Gift,
        title: "Offers and rewards",
        text: "Get personalised deals and exclusive in-store rewards.",
      },
      {
        icon: Heart,
        title: "More engaging shopping",
        text: "A smarter, easier and more enjoyable experience.",
      },
    ],
  },
];

function ValueForEveryone() {
  return (
    <section className="value-section">
      <div className="value-container">
        <motion.div
          className="value-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="value-eyebrow">
            MORE VALUE FOR EVERYONE
          </span>

          <h2>
            More value
            <br />
            for everyone
            <br />
            in the <span>aisle.</span>
          </h2>

          <p>
            A smarter retail media layer that creates value for brands,
            supermarkets and shoppers alike.
          </p>
        </motion.div>

        <div className="value-cards">
          {cards.map((card, index) => {
            const MainIcon = card.icon;

            return (
              <motion.article
                className="value-card"
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="value-card-image">
                  <img
                    src={card.image}
                    alt={`${card.title} using Hey!Carts`}
                  />
                </div>

                <div className="value-card-body">
                  <div className="value-card-icon">
                    <MainIcon size={27} strokeWidth={1.8} />
                  </div>

                  <h3>{card.title}</h3>

                  <span className="value-card-subtitle">
                    {card.subtitle}
                  </span>

                  <div className="value-benefits">
                    {card.items.map((item) => {
                      const ItemIcon = item.icon;

                      return (
                        <div
                          className="value-benefit"
                          key={item.title}
                        >
                          <div className="value-benefit-icon">
                            <ItemIcon size={22} strokeWidth={1.8} />
                          </div>

                          <div>
                            <strong>{item.title}</strong>
                            <p>{item.text}</p>
                          </div>
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
  );
}

export default ValueForEveryone;