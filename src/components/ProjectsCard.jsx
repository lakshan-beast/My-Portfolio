// import React from "react";

// import { FaLaptop, FaCodeBranch, FaLinkedin } from "react-icons/fa";

// import Zestara from "../assets/Zestara.webp";
// import Info_Lanka from "../assets/Info.Lanka.webp";
// import Educa from "../assets/educa.webp";
// import Dream_Tracker from "../assets/Dream-Tracker.webp";
// import Unseen_Tapro from "../assets/Unseen-Tapro.webp";

// const Projects = () => {
//   const projectsList = [
//     // Educa Advance Learning Platform
//     {
//       image: Educa,
//       title: "Educa | Advance Learning Platform",
//       description:
//         "A comprehensive educational resource hub providing students with organized, downloadable study materials and lesson notes through a minimalist and user-friendly React interface.",
//       tags: ["React.js", "SASS", "FireBase"],
//       link: "https://educa-lms-platform.vercel.app/",
//       // github:
//       //   "https://github.com/lakshan-beast/Educa-Advance-Learning-Platform",
//       linkedin: "",
//     },

//     // Unseen Tapro
//     {
//       image: Unseen_Tapro,
//       title: "Unseen_Tapro | in process",
//       description:
//         "A travel exploration platform dedicated to uncovering and showcasing the hidden gems and offbeat destinations of Sri Lanka through an interactive, responsive web experience.",
//       tags: ["React.js", "Tailwind CSS", "TypeScript"],
//       link: "https://unseentapro.vercel.app/",
//       // github:
//       //   "https://github.com/lakshan-beast/Educa-Advance-Learning-Platform",
//       linkedin: "",
//     },

//     // // react zestara project
//     // {
//     //   image: Zestara,
//     //   title: "Zestara | E-Commerce UI Kit",
//     //   description:
//     //     "A premium e-commerce platform built with React and SASS, featuring dynamic product filtering and a seamless checkout experience, optimized for high performance and modern digital shopping.",
//     //   tags: ["React", "SASS", "Context API"],
//     //   link: "https://zestara.vercel.app",
//     //   // github: "https://github.com/lakshan-beast/Zestara",
//     //   linkedin: "",
//     // },

//     // Dream Track | Academic Productivity Dashboard
//     {
//       image: Dream_Tracker,
//       title: "Dream Track | Study Tracker",
//       description:
//         "A premium academic management system built for students to track study progress through gamified focus timers, interactive past paper analytics using Recharts, and automated study scheduling with Firebase integration.",
//       tags: ["React.js", "Firebase", "Recharts", "SASS"],
//       link: "https://future-plan-six.vercel.app",
//       // github: "https://github.com/lakshan-beast/Future-Plan",
//       linkedin:
//         "https://www.linkedin.com/posts/lakshan-sandeepa_reactjs-firebase-freelanceproject-ugcPost-7459432361013821440-wHDL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFPtsUwB7_aLX2saPRBkbB618Q_hYVofstU",
//     },

//     // info.lanka project
//     {
//       image: Info_Lanka,
//       title: "info.lanka | Services",
//       description:
//         "A centralized, fully responsive web portal designed to streamline access to over 200+ verified Sri Lankan government services through an intuitive keyword-based search engine.",
//       tags: ["HTML5", "CSS", "JavaScript"],
//       link: "https://info-lanka-project.vercel.app",
//       // github: "https://github.com/lakshan-beast/info.lanka-Project",
//       linkedin: "",
//     },
//   ];

//   return (
//     <section className="projects" id="projects" data-aos-offset="0">
//       <div className="projects-container bento-container " data-aos="fade-up">
//         <h2 className="section-title">Featured Works</h2>

//         <div className="projects-grid bento-grid">
//           {projectsList.map((project, index) => (
//             <div
//               className="project-card bento-card large"
//               key={index}
//               data-aos="fade-up">
//               <div className="project-content">
//                 <img src={project.image} alt={project.title} />
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>

//                 <div className="tags">
//                   {project.tags.map((tag, i) => (
//                     <span key={i} className="tag">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* <div className="com-links">
//                   <a
//                     href={project.linkedin}
//                     className="reviews-link"
//                     // className="btn-github"
//                     target="_blank"
//                     data-aos="fade-right">
//                     <FaLinkedin /> Reviews
//                   </a>
//                 </div> */}

//                 <div className="projects-links">
//                   <a
//                     href={project.link}
//                     className="btn-link"
//                     data-aos="fade-right">
//                     <FaLaptop /> Live Demo
//                   </a>
//                   {/* <a
//                     href={project.github}
//                     className="btn-github"
//                     data-aos="fade-left">
//                     <FaCodeBranch /> Source Code
//                   </a> */}

//                   <a
//                     href={project.linkedin}
//                     className="btn-github"
//                     target="_blank"
//                     data-aos="fade-left">
//                     <FaLinkedin /> Reviews
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Portfolio() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeModal, setActiveModal] = useState(null);
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 40) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const projects = [
//     {
//       title: "Educa | Advance Learning Platform",
//       category: "React.js • SASS • Firebase",
//       description: "A comprehensive educational resource hub providing students with organized, downloadable study materials.",
//       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
//     },
//     {
//       title: "Unseen_Tapro",
//       category: "React.js • Tailwind CSS • TypeScript",
//       description: "A travel exploration platform dedicated to uncovering and showcasing the hidden gems of Sri Lanka.",
//       image: "https://images.unsplash.com/photo-1588598023183-fefde038cb44?q=80&w=1200&auto=format&fit=crop"
//     },
//     {
//       title: "Dream Track | Study Tracker",
//       category: "React.js • Firebase • Recharts",
//       description: "A premium academic management system built with gamified focus timers and past paper analytics.",
//       image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop"
//     },
//     {
//       title: "info.lanka | Services",
//       category: "HTML5 • CSS • JavaScript",
//       description: "A centralized web portal designed to streamline access to over 200+ verified Sri Lankan government services.",
//       image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
//     },
//   ];

//   return (
//     <div className="bg-[#080808] text-[#f5f5f5] font-sans antialiased selection:bg-[#22c55e] selection:text-black min-h-screen">
      
//       {/* Navbar */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-5 flex items-center justify-between ${
//         isScrolled
//           ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4"
//           : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
//       }`}>
//         <a href="#" className="group flex items-center space-x-3">
//           <span className="font-serif tracking-[0.3em] text-lg md:text-xl font-medium text-white group-hover:text-[#22c55e] transition-colors duration-300">
//             LAKSHAN.
//           </span>
//           <span className="hidden sm:inline-block w-8 h-[1px] bg-[#22c55e]/60"></span>
//           <span className="hidden sm:inline-block text-[10px] tracking-[0.4em] uppercase text-neutral-400">
//             Frontend Dev
//           </span>
//         </a>

//         <div className="hidden md:flex items-center space-x-10">
//           {["Projects", "Skills", "Journey", "Contact"].map((item, idx) => (
//             <a
//               key={idx}
//               href={`#${item.toLowerCase()}`}
//               className="text-xs tracking-[0.25em] uppercase text-neutral-300 hover:text-white transition-all duration-300 relative py-1 group">
//               {item}
//               <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#22c55e] transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}
//         </div>

//         <div className="flex items-center space-x-6">
//           <a
//             href="#contact"
//             className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full border border-white/20 text-xs tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm">
//             Get In Touch
//           </a>
//         </div>
//       </nav>

//       {/* Hero Header */}
//       <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#080808] via-black/50 to-black/70"></div>
        
//         <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}>
//             <span className="inline-block py-1.5 px-5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#22c55e] mb-6 backdrop-blur-md">
//               Frontend Developer &amp; React Enthusiast
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] font-normal text-white uppercase leading-[1.1] mb-8">
//             Crafting <span className="italic font-light text-neutral-400">Interfaces</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.6 }}
//             className="text-neutral-400 text-sm md:text-base tracking-[0.2em] max-w-xl mx-auto font-light mb-12">
//             Specializing in building scalable, accessible, and pixel-perfect web applications with React and Tailwind CSS.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.8 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-5">
//             <a
//               href="#projects"
//               className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium text-xs tracking-[0.25em] uppercase hover:bg-[#22c55e] transition-all duration-300 shadow-2xl">
//               View Projects
//             </a>
//           </motion.div>
//         </div>
//       </header>

//       {/* Featured Works Section */}
//       <section id="projects" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
//           <div>
//             <span className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase block mb-3">
//               Portfolio
//             </span>
//             <h2 className="font-serif text-3xl md:text-5xl tracking-[0.1em] text-white">
//               Featured Works
//             </h2>
//           </div>
//           <p className="text-neutral-400 text-xs tracking-[0.15em] max-w-xs mt-4 md:mt-0 font-light">
//             Each project is engineered with optimized state management and modern responsive layouts.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//           {projects.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => setSelectedProject(item)}
//               className="group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 aspect-[4/3] flex flex-col justify-end p-8">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-70"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

//               <div className="relative z-10">
//                 <span className="text-[10px] tracking-[0.3em] uppercase text-[#22c55e] block mb-2">
//                   {item.category}
//                 </span>
//                 <h3 className="font-serif text-2xl md:text-3xl tracking-[0.1em] text-white mb-3">
//                   {item.title}
//                 </h3>
//                 <p className="text-neutral-300 text-xs font-light tracking-wider line-clamp-2">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer / Contact Section */}
//       <footer id="contact" className="py-24 px-6 md:px-12 bg-black border-t border-white/10 text-center">
//         <div className="max-w-3xl mx-auto">
//           <span className="text-[10px] tracking-[0.4em] text-[#22c55e] uppercase block mb-4">
//             Get In Touch
//           </span>
//           <h2 className="font-serif text-4xl md:text-6xl tracking-[0.1em] text-white mb-6">
//             Let's Build Together
//           </h2>
//           <p className="text-neutral-400 text-sm tracking-[0.2em] font-light mb-10 max-w-lg mx-auto">
//             Available for roles and freelance projects. Reach out via email or connect on LinkedIn and GitHub.
//           </p>
//           <a
//             href="mailto:lakshansandeepa0305@gmail.com"
//             className="inline-block px-10 py-4 rounded-full bg-[#22c55e] text-black font-medium text-xs tracking-[0.3em] uppercase hover:bg-white transition-colors shadow-2xl">
//             Email Me
//           </a>

//           <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs tracking-[0.2em] text-neutral-500">
//             <span>© 2026 Lakshan Sandeepa. All rights reserved.</span>
//             <div className="flex space-x-6 mt-4 sm:mt-0">
//               <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
//               <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }