import React from "react";
// import "../styles/pages/Skill.scss";

const Skills = () => {
  const skillList = [
    { name: "React", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "SASS / SCSS", level: "Intermediate" },
    { name: "CSS3 / HTML5", level: "Advanced" },
    { name: "Git & Github", level: "Basic" },
    // {name: "React", level: "Advanced"},
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
            <div className="skill-card" key={index}>
              <h3>{skill.name}</h3>
              <p>{skill.level.level}</p>

              <div className="progess-bar">
                <div className={`progress 4{skill.level.toLowerCase()}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
