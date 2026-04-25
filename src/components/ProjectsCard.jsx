import React from "react";

import { FaLaptop, FaCodeBranch } from "react-icons/fa";

import Image2 from "../assets/project2.webp";
import Image3 from "../assets/project3.webp";
import Image1 from "../assets/project1.webp";

const Projects = () => {
  const projectsList = [
    // react zestara project
    {
      image: Image1,
      title: "Zestara | E-Commerce UI Kit",
      description:
        "A premium e-commerce platform built with React and SASS, featuring dynamic product filtering and a seamless checkout experience, optimized for high performance and modern digital shopping.",
      tags: ["React", "SASS", "Context API"],
      link: "https://zestara.vercel.app",
      github: "https://github.com/lakshan-beast/Zestara",
    },

    // info.lanka project
    {
      image: Image2,
      title: "info.lanka | Services",
      description:
        "A centralized, fully responsive web portal designed to streamline access to over 200+ verified Sri Lankan government services through an intuitive keyword-based search engine.",
      tags: ["HTML5", "CSS", "JavaScript"],
      link: "https://info-lanka-project.vercel.app",
      github: "https://github.com/lakshan-beast/info.lanka-Project",
    },

    // Educa Advance Learning Platform
    {
      image: Image3,
      title: "Educa | Advance Learning Platform",
      description:
        "A comprehensive educational resource hub providing students with organized, downloadable study materials and lesson notes through a minimalist and user-friendly React interface.",
      tags: ["HTML5", "CSS", "JavaScript"],
      link: "https://educa-advance-learning-platform.vercel.app",
      github:
        "https://github.com/lakshan-beast/Educa-Advance-Learning-Platform",
    },

    // Frontend Projects
    // {
    //   title: "Frontend Projects",
    //   description:
    //     "A high-perfomance online shop interface built with React & SASS, focusing on smooth user experience.",
    //   tags: ["HTML5", "CSS", "JavaScript"],
    //   github: "https://github.com/lakshan-beast/My-Frontend-Projects-Lab",
    // },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Works</h2>

        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <div className="project-card" key={index} data-aos="fade-up">
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

                <div className="projects-links">
                  <a href={project.link} className="btn-link">
                    <FaLaptop /> Live Demo
                  </a>
                  <a href={project.github} className="btn-github">
                    <FaCodeBranch /> Source Code
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
