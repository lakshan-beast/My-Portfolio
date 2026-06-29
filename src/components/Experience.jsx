import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Self-Directed Frontend Development",
      period: "2026 - Present",
      description:
        "Mastered React.js ecosystem, Modern CSS (SASS/Bootstrap), & JavaScript through instensive self-stufy & building hands-on projects.",
    },
    {
      title: "Project-Based Learning",
      period: "Focus: UI/UX & Logic",
      description:
        "Developed various frontend applications focusing on component-based architecture, responsive design, & state management.",
    },
    {
      title: "Continuous Learning & Certifications",
      period:
        "Expanding my technical & professional horizon through global academies",
      description:
        "Frontend & Collaboration: Mastering advanced JavaScript & repository workflows via IBM SkillsBuild.AI Integration: Exploring Cloud AI & AI-assisted development using Microsoft Azure & Copilot.Professional & Marketing: Developing client communication and self-promotion strategies through Google Garage.",
    },
  ];

  return (
    <section className="experience" id="experince" data-aos-offset="0">
      <div className="experience-container" data-aos="fade-up">
        <h2 className="section-title">My Journey</h2>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <div className="timeline-item" key={index} data-aos="fade-up">
              <div className="period">{experience.period}</div>
              <div className="content">
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
