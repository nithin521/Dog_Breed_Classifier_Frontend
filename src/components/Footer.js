import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="social-links">
        <a
          href="https://www.instagram.com/nithin_5189/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="mailto:nithin74728@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelopesBulk} />
        </a>
        <a
          href="https://github.com/nithin521"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        {/* Add more social media links as needed */}
      </div>
      <p>&copy; 2025 Dog Breed Classifier. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
