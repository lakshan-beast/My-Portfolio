// import React from "react";

// // import Courses from "./Coursers";

// import { TbMailFast } from "react-icons/tb";
// import { IoLogoCss3 } from "react-icons/io5";
// import { FaSquareJs } from "react-icons/fa6";
// import { BiCodeAlt, BiLogoVisualStudio } from "react-icons/bi";
// import { FaChrome, FaNpm, FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiTypescript,
//   SiFirebase,
//   SiReactrouter,
//   SiNetlify,
//   SiOpenai,
//   SiNextdotjs,
//   SiGithub,
//   SiHtml5,
//   SiSass,
//   SiVercel,
//   SiPostman,
// } from "react-icons/si";

// //skills array
// const Skills = () => {
//   const calculateExperience = (startDate) => {
//     const start = new Date(startDate);
//     const now = new Date();

//     if (start > now) {
//       return "Just Started";
//     }

//     let years = now.getFullYear() - start.getFullYear();
//     let months = now.getMonth() - start.getMonth();

//     if (months < 0) {
//       years--;
//       months += 12;
//     }

//     if (years > 0) {
//       return `${years} Years & ${months} Months Experience`;
//     } else {
//       return months <= 0 ? "Started Recently" : `${months} Months Experience`;
//     }
//   };

//   const skillList = [
//     {
//       name: "React",
//       level: "Intermediate",
//       date: "April 10, 2026",
//       icon: <FaReact />,
//     },
//     {
//       name: "TypeScript",
//       level: "Basic",
//       date: "July 28, 2026",
//       icon: <SiTypescript />,
//     },
//     {
//       name: "JavaScript",
//       level: "Intermediate",
//       date: "February 03, 2026",
//       icon: <FaSquareJs />,
//     },
//     {
//       name: "Tailwind CSS",
//       level: "Basic",
//       date: "July 25, 2026",
//       icon: <SiTailwindcss />,
//     },
//     {
//       name: "SASS / SCSS",
//       level: "Intermediate",
//       date: "March 10, 2026",
//       icon: <SiSass />,
//     },
//     {
//       name: "CSS3",
//       level: "Advanced",
//       date: "January 02, 2026",
//       icon: <IoLogoCss3 />,
//     },
//     {
//       name: "HTML5",
//       level: "Advanced",
//       date: "January 02, 2026",
//       icon: <SiHtml5 />,
//     },

//     // {
//     //   name: "Next.js",
//     //   level: "Basic",
//     //   date: "July 28, 2026",
//     //   icon: <SiNextdotjs />,
//     // },
//   ];

//   const toolsAndServices = [
//     { name: "Firebase", icon: <SiFirebase />, color: "#f5740b" },
//     { name: "EmailJS", icon: <TbMailFast />, color: "#f44336" },
//     { name: "React Router", icon: <SiReactrouter />, color: "#ca4245" },
//     { name: "Git & GitHub", icon: <FaGitAlt />, color: "#303030" },
//     { name: "NPM", icon: <FaNpm />, color: "#cb3837" },
//     { name: "Figma", icon: <FaFigma />, color: "#f24e1e" },
//     { name: "Dev Tools", icon: <FaChrome />, color: "#428537" },
//     { name: "Vercel", icon: <SiVercel />, color: "#181717" },
//     { name: "Netlify", icon: <SiNetlify />, color: "#00c7b7" },
//     { name: "VS Code", icon: <BiLogoVisualStudio />, color: "#007acc" },
//     { name: "Claude", icon: <SiOpenai />, color: "#10a37f" },
//     { name: "Cursor AI", icon: <BiCodeAlt />, color: "#38bdf8" },
//     // { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
//   ];
//   const doubleList = [...toolsAndServices, ...toolsAndServices];

//   const coursesData = [
//     {
//       title: "Junior Cybersecurity Analyst",
//       institute: "Cisco Networking Academy",
//       status: "In Progress",
//       skills: [
//         "Web Application Security",
//         "Network Security",
//         "Packet Routing",
//       ],
//       color: "from-cyan-500 to-blue-500",
//     },
//     {
//       title: "Artificial Intelligence Foundations",
//       institute: "OpenAI Academy",
//       status: "In Progress",
//       skills: [
//         "Artificial Intelligence (AI)",
//         "Prompt Engineering",
//         "LLM Logic",
//       ],
//       color: "from-emerald-500 to-green-500",
//     },
//     {
//       title: "Cybersecurity Fundamentals",
//       institute: "IBM SkillsBuild",
//       status: "In Progress",
//       skills: ["Data Privacy", "Information Security", "Compliance Arrays"],
//       color: "from-red-500 to-pink-500",
//     },
//     {
//       title: "Azure Fundamentals (AZ-900)",
//       institute: "Microsoft Certified",
//       status: "In Progress",
//       skills: ["Cloud Computing", "Cloud Architecture", "Azure Services"],
//       color: "from-blue-600 to-indigo-500",
//     },
//     {
//       title: "LearnEnglish Workplace Proficiency",
//       institute: "British Council",
//       status: "In Progress",
//       skills: [
//         "Professional Communication",
//         "Technical Writing",
//         "Remote Collaboration",
//       ],
//       color: "from-purple-500 to-violet-500",
//     },
//   ];

//   return (
//     <section className="skills" id="skills" data-aos-offset="0">
//       <div className="skills-container" data-aos="fade-up">
//         <h2 className="section-title" data-aos="fade-right">
//           Technical Toolbox
//         </h2>
//         <h2 className="parts-heading">Languages & Frameworks</h2>
//         <div className="skills-grid">
//           {skillList.map((skill, index) => (
//             <div className="skill-card shimmer" key={index} data-aos="fade-up">
//               <span className="skill-icon">{skill.icon}</span>
//               <h3 data-aos="fade-down">{skill.name}</h3>
//               <span className="exp-tag">{calculateExperience(skill.date)}</span>
//               <p data-aos="fade-right">{skill.level} </p>

//               <div className="progress-bar">
//                 <div
//                   data-aos="fade-right"
//                   className={`progress ${skill.level.toLowerCase()}`}></div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* other skills  */}
//         <h2 className="parts-heading">Software, Services & Platforms</h2>
//         <div className="marquee-wrapper">
//           <div className="marquee-track">
//             {doubleList.map((item, index) => (
//               <div key={index} className="marquee-item">
//                 <span style={{ color: item.color, fontSize: "1.5rem" }}>
//                   {item.icon}
//                 </span>
//                 <span>{item.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Github COntributation  */}
//         {/* <h2 className="parts-heading">My GitHub Activity</h2>
//         <div className="github-stats-container" data-aos="fade-up">
//           <div className="stats-grid">
//             <img src="https://streak-stats.demolab.com?user=lakshan-beast&theme=radical&hide_border=true&border_radius=6.5&date_format=j%20M%5B%20Y%5D&exclude_days=Sun%2CMon%2CTue%2CWed%2CThu%2CFri%2CSat&theme=tokyonight&hide_border=true" />

//             <img
//               src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=lakshan-beast&theme=github_dark"
//               alt="lakshan-beast's GitHub Stats"
//             />
//           </div>
//         </div> */}
//         {/* 
//         <div className="code-playground" data-aos="fade-up">
//           <div className="code-header">
//             <div className="code-dots">
//               <span className="dot red"></span>
//               <span className="dot yellow"></span>
//               <span className="dot green"></span>
//             </div>
//             <span className="code-title">useFetchCustomHook.js</span>
//           </div>
//           <div className="code-body">
//             <pre>
//               <code>
//                 {`
//                   // A custom hook I designed for clean API integration
//                   import { useState, useEffect } from 'react';

//                   export const useFetch = (url) => {
//                     const [data, setData] = useState(null);
//                     const [loading, setLoading] = useState(true);

//                     useEffect(() => {
//                       fetch(url)
//                         .then(res => res.json())
//                         .then(data => {
//                           setData(data);
//                           setLoading(false);
//                         });
//                     }, [url]);

//                     return { data, loading };
//                   };`}
//               </code>
//             </pre>
//           </div>
//         </div> */}
//       </div>

//       <div className="courses-continer">
//         <h2 className="parts-heading">
//           Continuous Professional Specializations
//         </h2>
//         {/* <p className="parts">
//           To evolve as a robust T-Shaped Engineer, I am continuously scaling my
//           core knowledge across AI engines, cloud ecosystems, and infrastructure
//           security.
//         </p> */}

//         {/* Courses Grid */}
//         <div className="courses-grid">
//           {coursesData.map((course, index) => (
//             <div key={index} className="course-card shimmer">
//               <div className="course-card__main">
//                 <div className="course-card__meta">
//                   <h3 className="course-card__institute">{course.institute}</h3>
//                   <span className="course-card__status">{course.status}</span>
//                 </div>

//                 {/* Course Title */}
//                 <h3 className="course-card__title">{course.title}</h3>
//               </div>

//               {/* Skills Tags */}
//               <div className="course-card__footer">
//                 <div className="course-card__tags">
//                   {course.skills.map((skill, sIndex) => (
//                     <span key={sIndex} className="course-card__tag">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <p className="courses-section__footnote">
//           *Also expanding knowledge through non-certified architectural
//           deep-dives via Google Digital Garage.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import React from "react";
// import { motion } from "framer-motion";
// import { TbMailFast } from "react-icons/tb";
// import { IoLogoCss3 } from "react-icons/io5";
// import { FaSquareJs } from "react-icons/fa6";
// import { BiCodeAlt, BiLogoVisualStudio } from "react-icons/bi";
// import { FaChrome, FaNpm, FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiTypescript,
//   SiFirebase,
//   SiReactrouter,
//   SiNetlify,
//   SiOpenai,
//   SiHtml5,
//   SiSass,
//   SiVercel,
// } from "react-icons/si";

// export default function Skills() {
//   const calculateExperience = (startDate) => {
//     const start = new Date(startDate);
//     const now = new Date();

//     if (start > now) {
//       return "Just Started";
//     }

//     let years = now.getFullYear() - start.getFullYear();
//     let months = now.getMonth() - start.getMonth();

//     if (months < 0) {
//       years--;
//       months += 12;
//     }

//     if (years > 0) {
//       return `${years} Years & ${months} Months Experience`;
//     } else {
//       return months <= 0 ? "Started Recently" : `${months} Months Experience`;
//     }
//   };

//   const skillList = [
//     {
//       name: "React",
//       level: "Intermediate",
//       date: "April 10, 2026",
//       icon: <FaReact size={24} />,
//     },
//     {
//       name: "TypeScript",
//       level: "Basic",
//       date: "July 28, 2026",
//       icon: <SiTypescript size={24} />,
//     },
//     {
//       name: "JavaScript",
//       level: "Intermediate",
//       date: "February 03, 2026",
//       icon: <FaSquareJs size={24} />,
//     },
//     {
//       name: "Tailwind CSS",
//       level: "Basic",
//       date: "July 25, 2026",
//       icon: <SiTailwindcss size={24} />,
//     },
//     {
//       name: "SASS / SCSS",
//       level: "Intermediate",
//       date: "March 10, 2026",
//       icon: <SiSass size={24} />,
//     },
//     {
//       name: "CSS3",
//       level: "Advanced",
//       date: "January 02, 2026",
//       icon: <IoLogoCss3 size={24} />,
//     },
//     {
//       name: "HTML5",
//       level: "Advanced",
//       date: "January 02, 2026",
//       icon: <SiHtml5 size={24} />,
//     },
//   ];

//   const toolsAndServices = [
//     { name: "Firebase", icon: <SiFirebase size={20} />, color: "#f5740b" },
//     { name: "EmailJS", icon: <TbMailFast size={20} />, color: "#f44336" },
//     { name: "React Router", icon: <SiReactrouter size={20} />, color: "#ca4245" },
//     { name: "Git & GitHub", icon: <FaGitAlt size={20} />, color: "#f05032" },
//     { name: "NPM", icon: <FaNpm size={20} />, color: "#cb3837" },
//     { name: "Figma", icon: <FaFigma size={20} />, color: "#f24e1e" },
//     { name: "Dev Tools", icon: <FaChrome size={20} />, color: "#4285f4" },
//     { name: "Vercel", icon: <SiVercel size={20} />, color: "#ffffff" },
//     { name: "Netlify", icon: <SiNetlify size={20} />, color: "#00c7b7" },
//     { name: "VS Code", icon: <BiLogoVisualStudio size={20} />, color: "#007acc" },
//     { name: "Claude", icon: <SiOpenai size={20} />, color: "#10a37f" },
//     { name: "Cursor AI", icon: <BiCodeAlt size={20} />, color: "#38bdf8" },
//   ];

//   const coursesData = [
//     {
//       title: "Junior Cybersecurity Analyst",
//       institute: "Cisco Networking Academy",
//       status: "In Progress",
//       skills: ["Web Application Security", "Network Security", "Packet Routing"],
//     },
//     {
//       title: "Artificial Intelligence Foundations",
//       institute: "OpenAI Academy",
//       status: "In Progress",
//       skills: ["Artificial Intelligence (AI)", "Prompt Engineering", "LLM Logic"],
//     },
//     {
//       title: "Cybersecurity Fundamentals",
//       institute: "IBM SkillsBuild",
//       status: "In Progress",
//       skills: ["Data Privacy", "Information Security", "Compliance Arrays"],
//     },
//     {
//       title: "Azure Fundamentals (AZ-900)",
//       institute: "Microsoft Certified",
//       status: "In Progress",
//       skills: ["Cloud Computing", "Cloud Architecture", "Azure Services"],
//     },
//     {
//       title: "LearnEnglish Workplace Proficiency",
//       institute: "British Council",
//       status: "In Progress",
//       skills: ["Professional Communication", "Technical Writing", "Remote Collaboration"],
//     },
//   ];

//   return (
//     <section id="skills" className="py-32 px-6 md:px-12 bg-[#080808] text-[#f5f5f5] relative overflow-hidden border-t border-white/5">
//       <div className="max-w-7xl mx-auto relative z-10">

//         {/* Section Header */}
//         <div className="text-center md:text-left mb-16 border-b border-white/10 pb-8">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-[10px] tracking-[0.4em] text-[#d4af37] uppercase block mb-3"
//           >
//             Capabilities &amp; Stack
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="font-serif text-3xl md:text-5xl tracking-[0.1em] text-white uppercase"
//           >
//             Technical <span className="italic font-light text-neutral-400">Toolbox</span>
//           </motion.h2>
//         </div>

//         {/* Languages & Frameworks Subheading */}
//         <div className="mb-8">
//           <h3 className="font-serif text-xl tracking-[0.1em] text-neutral-300 uppercase">
//             Languages &amp; Frameworks
//           </h3>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
//           {skillList.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-[#d4af37]/50 transition-all duration-500 group flex flex-col justify-between"
//             >
//               <div>
//                 <div className="flex items-center justify-between mb-6">
//                   <span className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#d4af37] group-hover:scale-110 transition-transform">
//                     {skill.icon}
//                   </span>
//                   <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
//                     {skill.level}
//                   </span>
//                 </div>
//                 <h4 className="font-serif text-2xl text-white tracking-[0.05em] mb-2">
//                   {skill.name}
//                 </h4>
//                 <p className="text-xs tracking-[0.15em] text-[#d4af37] font-light mb-6">
//                   {calculateExperience(skill.date)}
//                 </p>
//               </div>

//               {/* Progress Bar */}
//               <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden border border-white/5">
//                 <div
//                   className="bg-gradient-to-r from-[#d4af37] to-white h-full rounded-full transition-all duration-1000"
//                   style={{
//                     width:
//                       skill.level === "Advanced"
//                         ? "90%"
//                         : skill.level === "Intermediate"
//                         ? "75%"
//                         : "55%",
//                   }}
//                 ></div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Software, Services & Platforms Subheading */}
//         <div className="mb-8">
//           <h3 className="font-serif text-xl tracking-[0.1em] text-neutral-300 uppercase">
//             Software, Services &amp; Platforms
//           </h3>
//         </div>

//         {/* Tools Grid (Safe alternative to marquee to prevent layout breaking) */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-28">
//           {toolsAndServices.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.05 }}
//               className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/50 transition-all group text-center space-y-3"
//             >
//               <span style={{ color: item.color }} className="group-hover:scale-110 transition-transform">
//                 {item.icon}
//               </span>
//               <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-300 font-medium">
//                 {item.name}
//               </span>
//             </motion.div>
//           ))}
//         </div>

//         {/* Continuous Professional Specializations */}
//         <div className="mb-12">
//           <span className="text-[10px] tracking-[0.4em] text-[#d4af37] uppercase block mb-3">
//             Growth &amp; Academics
//           </span>
//           <h3 className="font-serif text-3xl md:text-4xl tracking-[0.1em] text-white uppercase">
//             Continuous Professional Specializations
//           </h3>
//         </div>

//         {/* Courses Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {coursesData.map((course, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-[#d4af37]/50 transition-all duration-500 flex flex-col justify-between group"
//             >
//               <div>
//                 <div className="flex justify-between items-center mb-6">
//                   <span className="text-[10px] tracking-[0.2em] uppercase text-[#d4af37] font-medium">
//                     {course.institute}
//                   </span>
//                   <span className="text-[9px] tracking-[0.2em] uppercase text-neutral-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
//                     {course.status}
//                   </span>
//                 </div>
//                 <h4 className="font-serif text-xl text-white tracking-[0.05em] mb-6 group-hover:text-[#d4af37] transition-colors">
//                   {course.title}
//                 </h4>
//               </div>

//               <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
//                 {course.skills.map((skill, sIndex) => (
//                   <span
//                     key={sIndex}
//                     className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] tracking-[0.15em] uppercase text-neutral-300"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <p className="text-xs tracking-[0.2em] text-neutral-500 font-light">
//             *Also expanding knowledge through non-certified architectural deep-dives via Google Digital Garage.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }
