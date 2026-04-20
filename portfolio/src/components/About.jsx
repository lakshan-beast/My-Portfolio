import React from "react";
// import "../styles/pages/About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="section-title">professional Profile</h2>

        <div className="about-wrapper">
          <div className="about-text">
            <p>
              A dedicated <strong>Frontend Developer</strong> with a strong
              foundation in modern javaSctipt & React. My Approach focuses on
              writting clean, maintainable code & optimizing perfomance for the
              best user experience.
            </p>

            <div className="about-stats">
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
        </div>
      </div>
    </section>
  );
};

export default About;
