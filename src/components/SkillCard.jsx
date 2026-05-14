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
    { name: "FireBase", level: "Basic", date: "May 01, 2026" },
    { name: "EmailJS", level: "Basic", date: "April 20, 2026" },
    { name: "Tailwind CSS", level: "Pending", date: "June 01, 2026" },
  ];

  return (
    <section className="skills" id="skills" data-aos-offset="0">
      <div className="skills-container" data-aos="fade-up">
        <h2 className="section-title" data-aos="fade-right">
          Technical Toolbox
        </h2>

        <div className="skills-grid">
          {skillList.map((skill, index) => (
            <div className="skill-card" key={index} data-aos="fade-up">
              <h3 data-aos="fade-down">{skill.name}</h3>
              <span className="exp-tag">{calculateExperience(skill.date)}</span>
              <p data-aos="fade-right">{skill.level} </p>

              <div className="progress-bar">
                <div
                  data-aos="fade-right"
                  className={`progress ${skill.level.toLowerCase()}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
