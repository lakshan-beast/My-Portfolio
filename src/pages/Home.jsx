// import { useEffect, useRef } from "react";

// import { FiGithub, FiX, FiLinkedin } from "react-icons/fi";
// import { FaRegEnvelope } from "react-icons/fa";

// const Home = () => {
//   const bgRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (bgRef.current) {
//         const rect = bgRef.current.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         bgRef.current.style.setProperty("--x", `${x}px`);
//         bgRef.current.style.setProperty("--y", `${y}px`);
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const text = `Specailizing in Building scalable, accessible, & pixel perfect web applications. I bridge the gap between complex backend logic & intuitive frontend experience.`;

//   return (
//     <section className="hero" id="hero">
//       <div className="hero-container glow-wrapper" ref={bgRef}>
//         <div className="hero-content">
//           <h1 className="header" data-aos="fade-up">
//             Crafting High-Perfomance
//             <span className="highlight"> User Interfaces</span> with React.
//           </h1>

//           <p className="reveal-text description" data-aos="fade-up">
//             {text.split(" ").map((word, index) => (
//               <span key={index} className="word">
//                 {word}&nbsp;
//               </span>
//             ))}
//           </p>

//           {/* hero buttons */}
//           <div className="hero-buttons">
//             <a href="#projects" className="btn-primary" data-aos="fade-right">
//               View Portfolio
//             </a>

//             <a
//               // download="Lakshan_Sandeepa_CV.pdf"
//               href="https://lakshan-sandeepa-cv.vercel.app/"
//               rel="noreferrer"
//               target="_blank"
//               className="btn-secondary"
//               data-aos="fade-left">
//               View / Download Resume
//             </a>
//           </div>

//           {/* socail media links */}
//           <div className="hero-socail" data-aos="zoom-in">
//             <a href="https://github.com/lakshan-beast" target="_blank">
//               <FiGithub />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/lakshan-sandeepa"
//               target="_blank">
//               <FiLinkedin />
//             </a>
//             <a href="mailto:lakshansandeepa0305@gmail.com">
//               <FaRegEnvelope />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FiGithub, FiLinkedin } from "react-icons/fi";
// import { FaRegEnvelope } from "react-icons/fa";

// export default function Home() {
//   const bgRef = useRef(null);

//   // Keep your cool mouse move glow effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (bgRef.current) {
//         const rect = bgRef.current.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         bgRef.current.style.setProperty("--x", `${x}px`);
//         bgRef.current.style.setProperty("--y", `${y}px`);
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const descriptionText =
//     "Specializing in building scalable, accessible, & pixel-perfect web applications. Bridging the gap between complex backend logic & intuitive frontend experiences.";

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#080808] text-[#f5f5f5] pt-28 pb-16 px-6 md:px-12">
//       {/* Background Gradient & Moody Vignette */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/60 to-black/80"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-[#080808]"></div>
//       </div>

//       {/* Glow Wrapper & Hero Content */}
//       <div ref={bgRef} className="relative z-10 max-w-5xl mx-auto text-center">
//         {/* Top Luxury Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}>
//           <span className="inline-block py-1.5 px-5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6 backdrop-blur-md">
//             Frontend Atelier / Portfolio 2026
//           </span>
//         </motion.div>

//         {/* Main Header */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-widest font-normal text-white uppercase leading-[1.1] mb-8">
//           Crafting High-Performance <br />
//           <span className="italic font-light text-neutral-400">
//             User Interfaces
//           </span>{" "}
//           with React
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="text-neutral-400 text-sm md:text-base tracking-[0.15em] max-w-2xl mx-auto font-light mb-12 leading-relaxed">
//           {descriptionText}
//         </motion.p>

//         {/* Hero Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.8 }}
//           className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
//           <a
//             href="#projects"
//             className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium text-xs tracking-[0.25em] uppercase hover:bg-[#d4af37] transition-all duration-300 shadow-2xl">
//             View Portfolio
//           </a>

//           <a
//             href="https://lakshan-sandeepa-cv.vercel.app/"
//             rel="noreferrer"
//             target="_blank"
//             className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-medium text-xs tracking-[0.25em] uppercase hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
//             View / Download Resume
//           </a>
//         </motion.div>

//         {/* Social Media Links */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="flex items-center justify-center space-x-6 text-neutral-400">
//           <a
//             href="https://github.com/lakshan-beast"
//             target="_blank"
//             rel="noreferrer"
//             className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-300"
//             aria-label="GitHub Profile">
//             <FiGithub size={18} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/lakshan-sandeepa"
//             target="_blank"
//             rel="noreferrer"
//             className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-300"
//             aria-label="LinkedIn Profile">
//             <FiLinkedin size={18} />
//           </a>
//           <a
//             href="mailto:lakshansandeepa0305@gmail.com"
//             className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-300"
//             aria-label="Email Contact">
//             <FaRegEnvelope size={18} />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import React, { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
// import { FaRegEnvelope } from "react-icons/fa";

// export default function Home() {
//   const containerRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Self-contained mouse position tracking for the glow effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (containerRef.current) {
//         const rect = containerRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: e.clientX - rect.left,
//           y: e.clientY - rect.top,
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <section
//       id="hero"
//       ref={containerRef}
//       className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#080808] text-[#f5f5f5] pt-28 pb-16 px-6 md:px-12">
//       {/* Dynamic Mouse Glow Effect (Works out of the box without external CSS) */}
//       <div
//         className="absolute pointer-events-none inset-0 transition-opacity duration-300 z-0"
//         style={{
//           background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.08), transparent 60%)`,
//         }}
//       />

//       {/* Background Gradient & Moody Vignette */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/60 to-black/80"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 max-w-5xl mx-auto text-center">
//         {/* Top Status & Luxury Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex items-center justify-center mb-6">
//           <div className="inline-flex items-center space-x-3 py-1.5 px-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
//             </span>
//             <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37]">
//               Frontend Engineer &amp; UI Kit Creator
//             </span>
//           </div>
//         </motion.div>

//         {/* Main Header */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-widest font-normal text-white uppercase leading-[1.1] mb-8">
//           Crafting High-Performance <br />
//           <span className="italic font-light text-neutral-400">
//             User Interfaces
//           </span>{" "}
//           with React
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="text-neutral-400 text-sm md:text-base tracking-[0.15em] max-w-2xl mx-auto font-light mb-12 leading-relaxed">
//           Specializing in building scalable, accessible, &amp; pixel-perfect web
//           applications. Bridging the gap between complex backend logic &amp;
//           intuitive frontend experiences.
//         </motion.p>

//         {/* Hero Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.8 }}
//           className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
//           <a
//             href="#projects"
//             className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium text-xs tracking-[0.25em] uppercase hover:bg-[#d4af37] transition-all duration-300 shadow-2xl flex items-center justify-center space-x-2 group">
//             <span>View Portfolio</span>
//             <FiArrowUpRight
//               className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
//               size={14}
//             />
//           </a>

//           <a
//             href="https://lakshan-sandeepa-cv.vercel.app/"
//             rel="noreferrer"
//             target="_blank"
//             className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-medium text-xs tracking-[0.25em] uppercase hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
//             View / Download Resume
//           </a>
//         </motion.div>

//         {/* Social Media Links */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="flex items-center justify-center space-x-6 text-neutral-400">
//           <a
//             href="https://github.com/lakshan-beast"
//             target="_blank"
//             rel="noreferrer"
//             className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-300"
//             aria-label="GitHub Profile">
//             <FiGithub size={18} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/lakshan-sandeepa"
//             target="_blank"
//             rel="noreferrer"
//             className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-300"
//             aria-label="LinkedIn Profile">
//             <FiLinkedin size={18} />
//           </a>
//           <a
//             href="mailto:lakshansandeepa0305@gmail.com"
//             className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-300"
//             aria-label="Email Contact">
//             <FaRegEnvelope size={18} />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
