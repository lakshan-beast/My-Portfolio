import React from "react";

const coursesData = [
  {
    title: "Junior Cybersecurity Analyst",
    institute: "Cisco Networking Academy",
    status: "In Progress",
    skills: ["Web Application Security", "Network Security", "Packet Routing"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Artificial Intelligence Foundations",
    institute: "OpenAI Academy",
    status: "In Progress",
    skills: ["Artificial Intelligence (AI)", "Prompt Engineering", "LLM Logic"],
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
    title: "Learn English Workplace Proficiency",
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

const CoursesSection = () => {
  return (
    <section className="courses">
      <div className="courses-continer">
        <h2 className="parts-heading">
          Continuous Professional Specializations
        </h2>
        <p className="parts-heading">
          To evolve as a robust T-Shaped Engineer, I am continuously scaling my
          core knowledge across AI engines, cloud ecosystems, and infrastructure
          security.
        </p>

        {/* Courses Grid */}
        <div className="courses-grid">
          {coursesData.map((course, index) => (
            <div key={index} className="course-card">
              
              <div
                className={`course-card__glow-line course-card__glow-line--${course.color}`}
              />

              <div className="course-card__main">
                {/* Institute & Status */}
                <div className="course-card__meta">
                  <span className="course-card__institute">
                    {course.institute}
                  </span>
                  <span className="course-card__status">{course.status}</span>
                </div>

                {/* Course Title */}
                <h3 className="course-card__title">{course.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="course-card__footer">
                <span className="course-card__footer-label">
                  Acquiring Skills:
                </span>
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

        {/* Info Text for Google Garage */}
        <p className="courses-section__footnote">
          *Also expanding knowledge through non-certified architectural
          deep-dives via Google Digital Garage.
        </p>
      </div>
    </section>
  );
};

export default CoursesSection;
