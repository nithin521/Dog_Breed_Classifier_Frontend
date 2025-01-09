import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <h2>About This Project</h2>
      <p>
        This project is a machine learning application designed to classify dog
        breeds from uploaded images. It leverages state-of-the-art deep learning
        models, ResNet18 and EfficientNetB2, for accurate predictions. The
        models are trained on a diverse dataset of 120 dog breeds, utilizing
        techniques like transfer learning and data augmentation to enhance
        performance. Users can upload an image to the web application, and the
        system predicts the possible dog breed with confidence score.
      </p>
    </div>
  );
};

export default About;
