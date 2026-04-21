import React from "react";
// import "../styles/pages/home.scss";
// import "./../styles/pages/Home.scss";
// import "../styles/pages/Home.scss";

import { FiGithub, FiX, FiLinkedin } from "react-icons/fi";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="header" data-aos="fade-up">
          Crafting High-Perfomance
          <span className="highlight"> User Interfaces</span> with React.
        </h1>
        <p className="description" data-aos="fade-up">
          Specailizing in Building scalable, accessible, & pixel perfect web
          applications. I bridge the gap between complex backend logic &
          intuitive frontend experience.
        </p>

        <div className="hero-buttons">
          <button type="button" className="btn-primary" data-aos="fade-right">
            View Portfolio
          </button>
          <button type="button" className="btn-secondary" data-aos="fade-left">
            Download Resume
          </button>
        </div>

        <div className="hero-socail" data-aos="zoom-in">
          <a href="#">
            <FiGithub />
          </a>
          <a href="#">
            <FiLinkedin />
          </a>
          <a href="#">
            <FiX />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
