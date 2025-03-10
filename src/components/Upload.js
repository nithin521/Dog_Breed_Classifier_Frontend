import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [dragging, setDragging] = useState(false);
  const [image, setImage] = useState(null); // State for storing the uploaded image
  const [uploaded, setUploaded] = useState(false); // State to track if an image has been uploaded
  const [breedInfo, setBreedInfo] = useState(null); // State to store breed prediction results

  const handleFileUpload = async (event) => {
    console.log("came");

    const file = event.target.files[0];
    console.log(file);

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl); // Set the image URL for preview
      setUploaded(true); // Mark as uploaded
      await sendImageToBackend(file); // Send the image to the backend
    }
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    setDragging(false);
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setImage(imageUrl);
      setUploaded(true); 
      await sendImageToBackend(files[0]); 
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const sendImageToBackend = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://dog-breed-classifier-backend.onrender.com/predict", {
      method: "POST",
      body: formData,
      mode: "cors", 
      headers: {
        "Accept": "application/json",
        },
      });


      if (!response.ok) {
        throw new Error("Failed to fetch breed information");
      }
      const data = await response.json();
      console.log(data);
      setBreedInfo(data); // Store the breed prediction results
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to get breed information. Please try again.");
    }
  };

  return (
    <div
      className={`upload ${dragging ? "dragging" : ""}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      id="upload"
    >
      <h2>{uploaded ? "Upload more images" : "Upload Your Dog Image"}</h2>
      <input
        type="file"
        onChange={handleFileUpload}
        style={{ display: "none" }} // Hide the default file input
        id="fileInput"
      />
      <label htmlFor="fileInput" className="uploadButton">
        Upload Image
      </label>
      <div className="drop-area">
        <p>
          {uploaded
            ? "Drag and drop more images here"
            : "Drag and drop your image here"}
        </p>
      </div>
      {image && (
        <img
          src={image}
          alt="Uploaded Preview"
          style={{ marginTop: "20px", maxWidth: "100%", height: "auto" }}
        />
      )}
      {breedInfo && (
        <div className="breed-info">
          <h3>Prediction Results:</h3>
          {breedInfo.breed.charAt(0).toUpperCase() + breedInfo.breed.slice(1)}
        </div>
      )}
    </div>
  );
};

export default Upload;
