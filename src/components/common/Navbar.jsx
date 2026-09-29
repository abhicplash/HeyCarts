import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import "../styles/navbar.css";
import logo from "../../assets/logos/heycartswhite.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
  ];

  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img src={logo} alt="Hey!Carts" />
        </a>

        <nav className="navbar-links">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={index === 0 ? "active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href="#partner" className="navbar-cta">
            Partner With Us
            <ArrowRight size={17} />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#partner"
              className="mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Partner With Us
              <ArrowRight size={17} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;