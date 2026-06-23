import React from "react";

import { TbMailFast } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";
import { FaSquareJs } from "react-icons/fa6";
import { BiCodeAlt, BiLogoVisualStudio } from "react-icons/bi";
import { FaChrome, FaNpm, FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiReactrouter,
  SiNetlify,
  SiOpenai,
  SiNextdotjs,
  SiNextdotjs,
  SiGithub,
  SiHtml5,
  SiSass,
  SiVercel,
  SiPostman,
} from "react-icons/si";

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
    {
      name: "React",
      level: "Internediate",
      date: "March 20, 2026",
      icon: <FaReact />,
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      date: "February 03, 2026",
      icon: <FaSquareJs />,
    },
    {
      name: "SASS / SCSS",
      level: "Intermediate",
      date: "March 10, 2026",
      icon: <SiSass />,
    },
    {
      name: "CSS3",
      level: "Advanced",
      date: "January 02, 2026",
      icon: <IoLogoCss3 />,
    },
    {
      name: "HTML5",
      level: "Advanced",
      date: "January 02, 2026",
      icon: <SiHtml5 />,
    },
    {
      name: "Tailwind CSS",
      level: "Basic",
      date: "June 23, 2026",
      icon: <SiTailwindcss />,
    },
    {
      name: "TypeScript",
      level: "Basic",
      date: "June 22, 2026",
      icon: <SiTypescript />,
    },
    {
      name: "Next.js",
      level: "Basic",
      date: "June 23, 2026",
      icon: <SiNextdotjs />,
    },
  ];

  const toolsAndServices = [
    { name: "Firebase", icon: <SiFirebase />, color: "#f5740b" },
    { name: "EmailJS", icon: <TbMailFast />, color: "#f44336" },
    { name: "React Router", icon: <SiReactrouter />, color: "#ca4245" },
    { name: "Git & GitHub", icon: <FaGitAlt />, color: "#303030" },
    { name: "NPM", icon: <FaNpm />, color: "#cb3837" },
    { name: "Figma", icon: <FaFigma />, color: "#f24e1e" },
    { name: "Dev Tools", icon: <FaChrome />, color: "#428537" },
    { name: "Vercel", icon: <SiVercel />, color: "#181717" },
    { name: "Netlify", icon: <SiNetlify />, color: "#00c7b7" },
    { name: "VS Code", icon: <BiLogoVisualStudio />, color: "#007acc" },
    { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
    { name: "Claude", icon: <SiOpenai />, color: "#10a37f" },
    { name: "Cursor AI", icon: <BiCodeAlt />, color: "#38bdf8" },
  ];
  const doubleList = [...toolsAndServices, ...toolsAndServices];

  return (
    <section className="skills" id="skills" data-aos-offset="0">
      <div className="skills-container" data-aos="fade-up">
        <h2 className="section-title" data-aos="fade-right">
          Technical Toolbox
        </h2>

        <h2 className="parts-heading">Languages & Frameworks</h2>

        <div className="skills-grid">
          {skillList.map((skill, index) => (
            <div className="skill-card shimmer" key={index} data-aos="fade-up">
              <span className="skill-icon">{skill.icon}</span>
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

        <h2 className="parts-heading">Software, Services & Platforms</h2>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {doubleList.map((item, index) => (
              <div key={index} className="marquee-item">
                <span style={{ color: item.color, fontSize: "1.5rem" }}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
