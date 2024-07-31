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
          <a href="https://www.facebook.com/lonestardentalcare" target='blank'><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://twitter.com/lonestardentalcare" target='blank'><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com/_lonestardentalcare" target='blank'><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
