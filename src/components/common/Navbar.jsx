import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import "../styles/navbar.css";
import logo from "../../assets/logos/heycartswhite.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Experience", to: "/#experience" },
    { label: "About", to: "/#about" },
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
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Hey!Carts" />
        </Link>

        <nav className="navbar-links">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <Link to="/#partner" className="navbar-cta">
            Partner With Us
            <ArrowRight size={17} />
          </Link>

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
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/#partner"
              className="mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Partner With Us
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;