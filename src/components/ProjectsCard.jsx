import React from "react";
// import "../styles/Projects.scss";

import { FaLaptop, FaCodeBranch } from "react-icons/fa";

const Projects = () => {
  const projectsList = [
    {
      title: "E-Commerce UI Kit",
      description:
        "A high-perfomance online shop interface built with React & SASS, focusing on smooth user experience.",
      tags: ["React", "SASS", "Context API"],
      link: "#",
      github: "#",
    },

    {
      title: "E-Commerce UI Kit",
      description:
        "A high-perfomance online shop interface built with React & SASS, focusing on smooth user experience.",
      tags: ["React", "SASS", "Context API"],
      link: "#",
      github: "#",
    },

    {
      title: "E-Commerce UI Kit",
      description:
        "A high-perfomance online shop interface built with React & SASS, focusing on smooth user experience.",
      tags: ["React", "SASS", "Context API"],
      link: "#",
      github: "#",
    },

    {
      title: "E-Commerce UI Kit",
      description:
        "A high-perfomance online shop interface built with React & SASS, focusing on smooth user experience.",
      tags: ["React", "SASS", "Context API"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Works</h2>

        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <div className="project-card" key={index} data-aos="fade-up">
              <div className="project-content">
                <h3>{projectsList.title}</h3>
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
