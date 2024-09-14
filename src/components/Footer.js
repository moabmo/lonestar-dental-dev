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
            <p>info@lonestardentalcare.com</p>
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
        </div>{" "}
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
