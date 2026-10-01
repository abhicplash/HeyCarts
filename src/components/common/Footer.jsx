import { Mail, ArrowUpRight } from "lucide-react";

import "../styles/footer.css";
import logo from "../../assets/logos/heycartswhite.png"

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <img src={logo} alt="Hey!Carts" className="footer-logo-image" />
            </a>

            {/* <p className="footer-description">
              Smarter trolley experiences built for modern retail.
            </p> */}
          </div>

          <div className="footer-nav-group">
            <span className="footer-label">Explore</span>

            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#experience">Experience</a>
              <a href="#about">About</a>
            </nav>
          </div>

          <div className="footer-contact">
            <span className="footer-label">Get in touch</span>

            <a href="mailto:hello@heycarts.com" className="footer-email">
              <Mail size={18} />
              hello@heycarts.com
              <ArrowUpRight size={16} />
            </a>

            <a href="#partner" className="footer-partner">
              Partner With Us
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span>© {year} Hey!Carts. All rights reserved.</span>

          <div className="footer-social-links">
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              Instagram
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;