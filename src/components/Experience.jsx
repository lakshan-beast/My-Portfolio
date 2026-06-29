import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Advanced Frontend Frameworks (Current Focus)",
      period: "2026 - Present",
      descriptions: [
        "Upskilling into the Next.js ecosystem to build production-grade, SEO-optimized web applications.",
        "Deep diving into Server-Side Rendering (SSR), Static Site Generation (SSG), and App Router architecture.",
        "Integrating Tailwind CSS with advanced component structures for rapid and clean UI development.",
      ],
    },
    {
      title: "Continuous Learning & Certifications",
      period: "Global Academies",
      descriptions: [
        "Mastering advanced JavaScript & repository workflows via IBM SkillsBuild.",
        "Exploring Cloud AI & AI-assisted development using Microsoft Azure & Copilot.",
        "Developing client communication and self-promotion strategies through Google Garage.",
      ],
    },
    {
      title: "Project-Based Learning",
      period: "Focus: UI/UX & Logic",
      descriptions: [
        "Developed various frontend applications focusing on component-based architecture, responsive design, & state management using React.js.",
      ],
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
                <ul className="journey-list">
                  {experience.descriptions.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
