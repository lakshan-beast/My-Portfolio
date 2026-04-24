import React from "react";

import { FaLaptop, FaCodeBranch } from "react-icons/fa";

import Image1 from "../assets/project1.png";
import Image2 from "../assets/project2.png";
import Image3 from "../assets/project3.png";

const Projects = () => {
  const projectsList = [
    // react zestara project
    {
      image: Image1,
      title: "Zestara | E-Commerce UI Kit",
      description:
        "A high-perfomance online shop interface built with React & SASS, focusing on smooth user experience.",
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
        "A high-perfomance online shop interface built with React & SASS, focusing on smooth user experience.",
      tags: ["HTML5", "CSS", "JavaScript"],
      link: "https://educa-advance-learning-platform.vercel.app",
      github:
        "https://github.com/lakshan-beast/Educa-Advance-Learning-Platform",
    },
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
