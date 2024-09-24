import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      {/* Map section */}
      <div className="footer-map">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63815.92559077185!2d36.9194273!3d-1.4755306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f9ff8b67fcb47%3A0xe1d3fa8772611820!2sLonestar%20Dental%20Care!5e0!3m2!1sen!2ske!4v1726372949180!5m2!1sen!2ske"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="footer-content">
        <address>
          <div className="icon-text">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p>Kitengela, Kenya</p>
          </div>
          <div className="icon-text">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <p>+254 792 056 862</p>
          </div>
          <div className="icon-text">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>info@lonestardentalcare.co.ke</p>
          </div>
        </address>

        <div className="social-links">
          <a
            href="https://www.facebook.com/lonestardentalcare"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com/lonestardentalcare"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/_lonestardentalcare"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <br />
        <p>
          © 2024 <span style={{ color: "#FFD700" }}>|</span> Lonestar Dental
          Care <span style={{ color: "#FFD700" }}>|</span> All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
