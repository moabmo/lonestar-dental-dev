import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2024 Lonestar Dental Care. All rights reserved.</p>
        <address>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Address: Kitengela, Kenya</p>
          <p><FontAwesomeIcon icon={faWhatsapp} /> Phone: +254 123 456 789</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: info@lonestardentalcare.com</p>
        </address>
        <div className="social-links">
          <a href="https://www.facebook.com/lonestardentalcare" target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/lonestardentalcare" target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/_lonestardentalcare" target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
