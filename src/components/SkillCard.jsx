import React from "react";
// import "../styles/pages/Skill.scss";

// import

const Skills = () => {
  const skillList = [
    { name: "React", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "SASS / SCSS", level: "Intermediate" },
    { name: "CSS3 / HTML5", level: "Advanced" },
    { name: "Git & Github", level: "Basic" },
    { name: "Python", level: "Pending" },
    // {name: "React", level: "Advanced"},
    // {name: "React", level: "Advanced"},
    // {name: "React", level: "Advanced"},
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Toolbox</h2>
        <div className="skills-grid">
          {skillList.map((skill, index) => (
            <div className="skill-card" key={index} data-aos="fade-up">
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>

              <div className="progress-bar">
                <div className={`progress ${skill.level.toLowerCase()}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
