import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2024 Lonestar Dental Care. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
