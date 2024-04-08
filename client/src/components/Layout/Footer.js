import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src="/images/playstore.png" alt="playstore" />
        <img src="/images/appstore.png" alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Zenith Store</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; Govind</p>

        <p className="text-center mt-3">
          <Link to="/about" style={{ textDecoration: 'none' }}>  About  </Link>
          |
          <Link to="/contact" style={{ textDecoration: 'none' }}>  Contact  </Link>
          |
          <Link to="/policy" style={{ textDecoration: 'none' }}>  Privacy Policy  </Link>
        </p>

      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/">Instagram</a>
        <a href="http://youtube.com/">Youtube</a>
        <a href="http://instagram.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
