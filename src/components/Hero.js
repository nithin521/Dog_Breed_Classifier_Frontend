import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-content">
        <h2>Welcome to Breed Whiz</h2>
        <p>Identify dog breeds with ease!</p>
        <div className="upload-container">
          <input
            type="file"
            accept="image/*"
            id="file-input"
            style={{ display: "none" }}
          />
          <a htmlFor="file-input" className="upload-button" href="#upload">
            <FontAwesomeIcon icon={faUpload} style={{ marginRight: "10px" }} />
            Upload Image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
