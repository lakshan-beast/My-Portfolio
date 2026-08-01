import React from "react";

// import Courses from "./Coursers";

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
      level: "Intermediate",
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
      date: "July 15, 2026",
      icon: <SiTailwindcss />,
    },
    {
      name: "TypeScript",
      level: "Basic",
      date: "July 22, 2026",
      icon: <SiTypescript />,
    },
    {
      name: "Next.js",
      level: "Basic",
      date: "July 15, 2026",
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

  const coursesData = [
    {
      title: "Junior Cybersecurity Analyst",
      institute: "Cisco Networking Academy",
      status: "In Progress",
      skills: [
        "Web Application Security",
        "Network Security",
        "Packet Routing",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Artificial Intelligence Foundations",
      institute: "OpenAI Academy",
      status: "In Progress",
      skills: [
        "Artificial Intelligence (AI)",
        "Prompt Engineering",
        "LLM Logic",
      ],
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Cybersecurity Fundamentals",
      institute: "IBM SkillsBuild",
      status: "In Progress",
      skills: ["Data Privacy", "Information Security", "Compliance Arrays"],
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Azure Fundamentals (AZ-900)",
      institute: "Microsoft Certified",
      status: "In Progress",
      skills: ["Cloud Computing", "Cloud Architecture", "Azure Services"],
      color: "from-blue-600 to-indigo-500",
    },
    {
      title: "LearnEnglish Workplace Proficiency",
      institute: "British Council",
      status: "In Progress",
      skills: [
        "Professional Communication",
        "Technical Writing",
        "Remote Collaboration",
      ],
      color: "from-purple-500 to-violet-500",
    },
  ];

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
        {/* other skills  */}
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
        {/* Github COntributation  */}
        {/* <h2 className="parts-heading">My GitHub Activity</h2>
        <div className="github-stats-container" data-aos="fade-up">
          <div className="stats-grid">
            <img src="https://streak-stats.demolab.com?user=lakshan-beast&theme=radical&hide_border=true&border_radius=6.5&date_format=j%20M%5B%20Y%5D&exclude_days=Sun%2CMon%2CTue%2CWed%2CThu%2CFri%2CSat&theme=tokyonight&hide_border=true" />

            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=lakshan-beast&theme=github_dark"
              alt="lakshan-beast's GitHub Stats"
            />
          </div>
        </div> */}
        {/* 
        <div className="code-playground" data-aos="fade-up">
          <div className="code-header">
            <div className="code-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="code-title">useFetchCustomHook.js</span>
          </div>
          <div className="code-body">
            <pre>
              <code>
                {`
                  // A custom hook I designed for clean API integration
                  import { useState, useEffect } from 'react';

                  export const useFetch = (url) => {
                    const [data, setData] = useState(null);
                    const [loading, setLoading] = useState(true);

                    useEffect(() => {
                      fetch(url)
                        .then(res => res.json())
                        .then(data => {
                          setData(data);
                          setLoading(false);
                        });
                    }, [url]);

                    return { data, loading };
                  };`}
              </code>
            </pre>
          </div>
        </div> */}
      </div>

      <div className="courses-continer">
        <h2 className="parts-heading">
          Continuous Professional Specializations
        </h2>
        {/* <p className="parts">
          To evolve as a robust T-Shaped Engineer, I am continuously scaling my
          core knowledge across AI engines, cloud ecosystems, and infrastructure
          security.
        </p> */}

        {/* Courses Grid */}
        <div className="courses-grid">
          {coursesData.map((course, index) => (
            <div key={index} className="course-card shimmer">
              <div className="course-card__main">
                <div className="course-card__meta">
                  <h3 className="course-card__institute">{course.institute}</h3>
                  <span className="course-card__status">{course.status}</span>
                </div>

                {/* Course Title */}
                <h3 className="course-card__title">{course.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="course-card__footer">
                <div className="course-card__tags">
                  {course.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="course-card__tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="courses-section__footnote">
          *Also expanding knowledge through non-certified architectural
          deep-dives via Google Digital Garage.
        </p>
      </div>
    </section>
  );
};

export default Skills;
