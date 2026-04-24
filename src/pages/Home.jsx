import React from "react";

import { FiGithub, FiX, FiLinkedin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
// import { SiFreelancer } from "react-icons/si";

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
          <a href="#projects" className="btn-primary" data-aos="fade-right">
            View Portfolio
          </a>
          <a
            href="/my_resume.pdf"
            download="Lakshan_Sandeepa_CV.pdf"
            className="btn-secondary"
            data-aos="fade-left">
            Download Resume
          </a>
        </div>

        <div className="hero-socail" data-aos="zoom-in">
          <a href="https://github.com/lakshan-beast" target="_blank">
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lakshan-sandeepa"
            target="_blank">
            <FiLinkedin />
          </a>
          {/* <a href="#">
            <SiFreelancer />
          </a> */}
          <a href="mailto:lakshansandeepa0305@gmail.com">
            <FaRegEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
