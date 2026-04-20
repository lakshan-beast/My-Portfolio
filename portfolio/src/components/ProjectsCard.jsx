import React from "react";
// import "../styles/Projects.scss";

const Projects = () => {
  const projectsList = [
    {
      title: "E-Commerce UI Kit",
      description:
        "A high-perfomance online shop interface built with React & SASS, focusing on smooth user experience.",
      tags: ["React", "SASS, Context API"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-contaienr">
        <h2 className="section-title">Featured Works</h2>

        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <div className="project-card" key={index}>
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

                <div className="project-links">
                  <a href={project.link} className="btn-link">
                    Live Demo
                  </a>
                  <a href={project.github} className="btn-github">
                    Source Code
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
