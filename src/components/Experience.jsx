// import React from "react";

// const Experience = () => {
//   const experiences = [
//     {
//       title: "Advanced Frontend Frameworks (Current Focus)",
//       period: "2026 - Present",
//       descriptions: [
//         "Upskilling into the Next.js ecosystem to build production-grade, SEO-optimized web applications.",
//         "Deep diving into Server-Side Rendering (SSR), Static Site Generation (SSG), and App Router architecture.",
//         "Integrating Tailwind CSS with advanced component structures for rapid and clean UI development.",
//       ],
//     },
//     {
//       title: "Continuous Learning & Certifications",
//       period: "Global Academies",
//       descriptions: [
//         "Mastering advanced JavaScript & repository workflows via IBM SkillsBuild.",
//         "Exploring Cloud AI & AI-assisted development using Microsoft Azure & Copilot.",
//         "Developing client communication and self-promotion strategies through Google Garage.",
//       ],
//     },
//     {
//       title: "Project-Based Learning",
//       period: "Focus: UI/UX & Logic",
//       descriptions: [
//         "Developed various frontend applications focusing on component-based architecture, responsive design, & state management using React.js.",
//       ],
//     },
//   ];

//   return (
//     <section className="experience" id="experince" data-aos-offset="0">
//       <div className="experience-container" data-aos="fade-up">
//         <h2 className="section-title">My Journey</h2>

//         <div className="timeline">
//           {experiences.map((experience, index) => (
//             <div className="timeline-item" key={index} data-aos="fade-up">
//               <div className="period">{experience.period}</div>
//               <div className="content">
//                 <h3>{experience.title}</h3>
//                 <ul className="journey-list">
//                   {experience.descriptions.map((desc, index) => (
//                     <li key={index}>{desc}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

// import React from "react";
// import { FiArrowRight } from "react-icons/fi";

// export default function Experience() {
//   const experiences = [
//     {
//       title: "Advanced Frontend Frameworks (Current Focus)",
//       period: "2026 - PRESENT",
//       descriptions: [
//         "Upskilling into the Next.js ecosystem to build production-grade, SEO-optimized web applications.",
//         "Deep diving into Server-Side Rendering (SSR), Static Site Generation (SSG), and App Router architecture.",
//         "Integrating modern CSS & SASS methodologies with advanced component structures for rapid and clean UI development.",
//       ],
//     },
//     {
//       title: "Continuous Learning & Certifications",
//       period: "GLOBAL ACADEMIES",
//       descriptions: [
//         "Mastering advanced JavaScript & repository workflows via IBM SkillsBuild.",
//         "Exploring Cloud AI & AI-assisted development using Microsoft Azure & Copilot.",
//         "Developing client communication and self-promotion strategies through Google Garage.",
//       ],
//     },
//     {
//       title: "Project-Based Learning",
//       period: "FOCUS: UI/UX & LOGIC",
//       descriptions: [
//         "Developed various frontend applications focusing on component-based architecture, responsive design, & state management using React.js.",
//       ],
//     },
//   ];

//   return (
//     <section id="experience" className="experience">
//       <div className="experience-container">
//         {/* Section Header */}
//         <div className="section-header">
//           {/* <span className="section-tag">CAREER & GROWTH</span> */}
//           <h2 className="section-title">
//             MY JOURNEY<span className="title-dot">.</span>
//           </h2>
//         </div>

//         {/* Timeline Container */}
//         <div className="timeline">
//           {experiences.map((experience, index) => (
//             <div key={index} className="timeline-item">
//               {/* Timeline Bullet Node */}
//               <div className="timeline-node" />

//               {/* Experience Card */}
//               <div className="timeline-item">
//                 {/* Period Badge */}
//                 <div className="period">{experience.period}</div>

//                 {/* Job / Focus Title */}
//                 <h3 className="content">{experience.title}</h3>

//                 {/* Descriptions List */}
//                 <ul className="journey-list">
//                   {experience.descriptions.map((desc, i) => (
//                     <li key={i} className="">
//                       <FiArrowRight className="arrow-icon" />
//                       <span>{desc}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const experiences = [
  {
    period: "2026 — Present",
    title: "Founder & Frontend Engineer",
    company: "SyncXel",
    description:
      "Founded SyncXel, a component library offering reusable React, Tailwind CSS and Motion UI components. Currently building and maintaining the platform while working with clients on real-world web projects.",
    tags: ["React", "Tailwind CSS", "Motion", "Product", "Client Work"],
    highlight: true,
  },
  {
    period: "2026",
    title: "Client Projects & Real-World Delivery",
    company: "Freelance",
    description:
      "Built and delivered client websites, including a portfolio website and an e-commerce experience for a perfume business. Worked with Firebase, EmailJS, GitHub, Vercel and Netlify for deployment, forms and hosting workflows.",
    tags: ["Firebase", "EmailJS", "Vercel", "Netlify", "GitHub"],
  },
  {
    period: "2026",
    title: "Modern Frontend Stack",
    company: "Self-directed Learning",
    description:
      "Moved from traditional CSS workflows into Tailwind CSS, Motion and Supabase. Focused on component-based UI, animations and practical frontend architecture.",
    tags: ["Tailwind CSS", "Framer Motion", "Supabase", "React"],
  },
  {
    period: "2025 — 2026",
    title: "Frontend Foundations",
    company: "Self-directed Learning",
    description:
      "Started with HTML, CSS and JavaScript, then moved into SASS/SCSS and Bootstrap. Built early projects while learning responsive design, layout systems and core JavaScript.",
    tags: ["HTML5", "CSS3", "JavaScript", "SASS", "Bootstrap"],
  },
];

const currentLearning = {
  title: "Currently Learning",
  description:
    "Deepening TypeScript and exploring Next.js for production-grade applications. Continuing to learn AI-assisted development, prompt engineering and modern developer tools.",
  tags: ["TypeScript", "Next.js", "AI Tools", "Prompt Engineering"],
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-ink px-5 py-24 text-paper sm:px-10 lg:px-[5%] lg:py-32">
      <div className="mx-auto max-w-350">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          <motion.p
            variants={item}
            className="mb-4 text-sm tracking-[0.25em] text-muted uppercase">
            Experience
          </motion.p>

          <motion.h2
            variants={item}
            className="font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            My journey
            <span className="text-violet-brand">.</span>
          </motion.h2>
        </motion.div>

        <div className="relative mt-16 max-w-225 mx-auto">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-white/10 md:left-[calc(9rem+7px)]" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-10">
            {experiences.map((experience) => (
              <motion.div
                key={experience.title}
                variants={item}
                initial={{ opacity: 0.3, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                className="relative flex flex-col gap-4 pl-8 md:flex-row md:gap-10 md:pl-0">
                {/* Sticky period */}
                <div className="md:w-36 md:shrink-0">
                  <span className="relative z-10 inline-flex items-center rounded-full border border-white/10 bg-ink px-3 py-1.5 text-xs font-semibold tracking-wide text-violet-soft">
                    {experience.period}
                  </span>
                </div>

                {/* Node */}
                <span
                  className={`absolute top-2 left-0 size-4 rounded-full border-4 border-ink md:left-[9rem] ${
                    experience.highlight
                      ? "bg-violet-brand shadow-[0_0_16px_#7c3aed] animate-ping"
                      : "bg-white/25"
                  }`}
                />

                {/* Card */}
                <div
                  className={`flex-1 rounded-3xl border p-7 backdrop-blur-md transition lg:p-8 ${
                    experience.highlight
                      ? "border-violet-brand/30 bg-violet-brand/[0.07]"
                      : "border-white/10 bg-white/4"
                  }`}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-bold sm:text-2xl">
                      {experience.title}
                    </h3>

                    <span className="text-xs tracking-widest text-muted uppercase">
                      {experience.company}
                    </span>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "keyframes",
                      stiffness: 400,
                      damping: 17,
                    }}
                    className="mt-4 text-sm leading-tight text-muted font-primary">
                    {experience.description}
                  </motion.p>

                  <div className="mt-3 flex flex-wrap gap-1.5 border-t border-slate-100/10 pt-3">
                    {experience.tags.map((tag) => (
                      <motion.span
                        initial={{ opacity: 0.3, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted transition hover:border-violet-brand hover:text-violet-soft">
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Currently learning */}
            <motion.div
              variants={item}
              className="relative flex flex-col gap-2 pl-8 md:flex-row md:gap-10 md:pl-0">
              <div className="md:w-36 md:shrink-0">
                <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-violet-brand/40 bg-violet-brand/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-violet-soft">
                  <span className="size-1.5 animate-pulse rounded-full bg-violet-brand animate-pulse" />
                  Now
                </span>
              </div>

              <span className="absolute top-2 left-0 size-4 rounded-full border-4 border-ink bg-violet-brand shadow-[0_0_16px_#7c3aed] md:left-[9rem] animate-ping" />

              <div className="flex-1 rounded-3xl border border-violet-brand/30 bg-violet-brand/[0.08] p-7 backdrop-blur-md lg:p-8">
                <h3 className="font-display text-xl font-bold sm:text-2xl">
                  {currentLearning.title}
                </h3>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "keyframes",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="mt-4 text-sm leading-tight font-primary text-muted ">
                  {currentLearning.description}
                </motion.p>

                <div className="mt-3 flex flex-wrap gap-1 border-t border-slate-100/10 pt-3">
                  {currentLearning.tags.map((tag) => (
                    <motion.span
                      initial={{ opacity: 0.3, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      className="rounded-full border border-violet-brand/25 bg-violet-brand/10 px-3 py-1.5 text-xs text-violet-soft">
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* GitHub activity */}
        {/* <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md lg:p-8">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs tracking-[0.2em] text-muted uppercase">
              <FiGithub />
              GitHub activity
            </span>

            <a
              href="https://github.com/lakshan-beast"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs text-violet-soft transition hover:text-paper">
              View profile
              <FiArrowUpRight />
            </a>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/5 bg-ink-soft p-4">
            <img
              src="https://ghchart.rshah.org/7C3AED/lakshan-beast"
              alt="GitHub contribution graph"
              loading="lazy"
              decoding="async"
              className="w-full"
              style={{
                filter:
                  "invert(1) hue-rotate(180deg) brightness(0.95) contrast(0.85)",
              }}
            />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
