import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>🚗 CarZone</h2>
          <p>
            Buy, Sell & Explore Premium Cars at the Best Prices.
            Your trusted destination for dream cars.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Car_listing">Carlist</Link>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>

          <p>📍 Noida, Uttar Pradesh</p>
          <p>📞 +91 9876543210</p>
          <p>📧 support@carzone.com</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CarZone | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;