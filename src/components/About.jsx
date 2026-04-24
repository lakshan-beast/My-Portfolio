import React from "react";
import HeroImage from "../assets/hero.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">Professional Profile</h2>

        <div className="about-wrapper">
          <div className="about-text">
            <p data-aos="fade-right">
              A dedicated <strong>Frontend Developer</strong> with a strong
              foundation in modern JavaSctipt & React. My approach focuses on
              writing clean, maintainable code & optimizing perfomance for the
              best user experience.
            </p>

            <div className="about-stats" data-aos="fade-up">
              <div className="stat-item">
                <span className="number">Self-Taught</span>
                <span className="label">Expertise</span>
              </div>

              <div className="stat-item">
                <span className="number">React</span>
                <span className="label">Specailist</span>
              </div>
            </div>
          </div>

          <div className="about-image" data-aos="fade-up">
            <img src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
