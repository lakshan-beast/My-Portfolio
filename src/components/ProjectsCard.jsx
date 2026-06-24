import React from "react";

import { FaLaptop, FaCodeBranch, FaLinkedin } from "react-icons/fa";

import Zestara from "../assets/Zestara.webp";
import Info_Lanka from "../assets/Info.Lanka.webp";
import Educa from "../assets/educa.png";
import Dream_Tracker from "../assets/Dream-Tracker.webp";

const Projects = () => {
  const projectsList = [
    // Educa Advance Learning Platform
    {
      image: Educa,
      title: "Educa | Advance Learning Platform",
      description:
        "A comprehensive educational resource hub providing students with organized, downloadable study materials and lesson notes through a minimalist and user-friendly React interface.",
      tags: ["React.js", "SASS", "FireBase"],
      link: "https://educa-lms-platform.vercel.app/",
      // github:
      //   "https://github.com/lakshan-beast/Educa-Advance-Learning-Platform",
      linkedin: "",
    },

    // info.lanka project
    {
      image: Info_Lanka,
      title: "info.lanka | Services",
      description:
        "A centralized, fully responsive web portal designed to streamline access to over 200+ verified Sri Lankan government services through an intuitive keyword-based search engine.",
      tags: ["HTML5", "CSS", "JavaScript"],
      link: "https://info-lanka-project.vercel.app",
      // github: "https://github.com/lakshan-beast/info.lanka-Project",
      linkedin: "",
    },

    // react zestara project
    {
      image: Zestara,
      title: "Zestara | E-Commerce UI Kit",
      description:
        "A premium e-commerce platform built with React and SASS, featuring dynamic product filtering and a seamless checkout experience, optimized for high performance and modern digital shopping.",
      tags: ["React", "SASS", "Context API"],
      link: "https://zestara.vercel.app",
      // github: "https://github.com/lakshan-beast/Zestara",
      linkedin: "",
    },

    // Dream Track | Academic Productivity Dashboard
    {
      image: Dream_Tracker,
      title: "Dream Track | Academic Performance Tracker",
      description:
        "A premium academic management system built for students to track study progress through gamified focus timers, interactive past paper analytics using Recharts, and automated study scheduling with Firebase integration.",
      tags: ["React.js", "Firebase", "Recharts", "SASS"],
      link: "https://future-plan-six.vercel.app",
      // github: "https://github.com/lakshan-beast/Future-Plan",
      linkedin:
        "https://www.linkedin.com/posts/lakshan-sandeepa_reactjs-firebase-freelanceproject-ugcPost-7459432361013821440-wHDL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFPtsUwB7_aLX2saPRBkbB618Q_hYVofstU",
    },

    // Frontend Projects
    // {
    //   title: "Frontend Projects",
    //   description:
    //     "A high-perfomance online shop interface built with React & SASS, focusing on smooth user experience.",
    //   tags: ["HTML5", "CSS", "JavaScript"],
    //   github: "https://github.com/lakshan-beast/My-Frontend-Projects-Lab",
    // },

    // https://future-plan-six.vercel.app/
  ];

  return (
    <section className="projects" id="projects" data-aos-offset="0">
      <div className="projects-container bento-container " data-aos="fade-up">
        <h2 className="section-title">Featured Works</h2>

        <div className="projects-grid bento-grid">
          {projectsList.map((project, index) => (
            <div
              className="project-card bento-card large"
              key={index}
              data-aos="fade-up">
              <div className="project-content">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* <div className="com-links">
                  <a
                    href={project.linkedin}
                    className="reviews-link"
                    // className="btn-github"
                    target="_blank"
                    data-aos="fade-right">
                    <FaLinkedin /> Reviews
                  </a>
                </div> */}

                <div className="projects-links">
                  <a
                    href={project.link}
                    className="btn-link"
                    data-aos="fade-right">
                    <FaLaptop /> Live Demo
                  </a>
                  {/* <a
                    href={project.github}
                    className="btn-github"
                    data-aos="fade-left">
                    <FaCodeBranch /> Source Code
                  </a> */}

                  <a
                    href={project.linkedin}
                    // className="reviews-link"
                    className="btn-github"
                    target="_blank"
                    data-aos="fade-left">
                    <FaLinkedin /> Reviews
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
