import React from "react";

//skills array
const Skills = () => {
  const calculateExperience = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();

    if (start > now) {
      return "Just Started";
    }

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years > 0) {
      return `${years} Years & ${months} Months Experience`;
    } else {
      return months <= 0 ? "Started Recently" : `${months} Months Experience`;
    }
  };

  const skillList = [
    { name: "React", level: "Basic", date: "March 20, 2026" },
    { name: "JavaScript", level: "Intermediate", date: "February 03, 2026" },
    { name: "SASS / SCSS", level: "Intermediate", date: "March 10, 2026" },
    { name: "CSS3 / HTML5", level: "Advanced", date: "January 02, 2026" },
    { name: "Git & Github", level: "Basic", date: "February 01, 2026" },
    { name: "Python", level: "Pending", date: "June 01, 2026" },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Toolbox</h2>

        <div className="skills-grid">
          {skillList.map((skill, index) => (
            <div className="skill-card" key={index} data-aos="fade-up">
              <h3>{skill.name}</h3>
              <span className="exp-tag">{calculateExperience(skill.date)}</span>
              <p>{skill.level} </p>

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
