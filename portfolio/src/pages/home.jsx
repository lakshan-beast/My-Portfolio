import React from "react";
// import "../styles/pages/home.scss";
// import "./../styles/pages/Home.scss";
// import "../styles/pages/Home.scss";

import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="header" data-aos="fade-up">
          Crafting High-Perfomance
          <span className="highlight">User Interfaces</span> with React
        </h1>
        <p className="description" data-aos="fade-up">
          Specailizing in Building scalable, accessible, & pixel perfect web
          applications. i bridge the gap betweencomplex backend logic &
          intuitive frontend experience.
        </p>

        <div className="hero-buttons">
          <button type="button" className="btn-primary">
            View Portfolio
          </button>
          <button type="button" className="btn-secondary">
            Download Resume
          </button>
        </div>

        <div className="hero-socail">
          <a href="#">
            <FiGithub />
          </a>
          <a href="#">
            <FiLinkedin />
          </a>
          <a href="#">
            <FiTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
