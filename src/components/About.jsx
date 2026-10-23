// import { useEffect, useRef } from "react";
// import HeroImage from "../assets/hero.jpg";

// const About = () => {
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

//   return (
//     <section className="about" id="about" data-aos-offset="0">
//       <div
//         className="about-container glow-wrapper "
//         data-aos="fade-up"
//         ref={bgRef}>
//         <h2 className="section-title" data-aos="fade-up">
//           Professional Profile
//         </h2>

//         <div className="about-wrapper">
//           <div className="about-text">
//             <p data-aos="fade-up">
//               A dedicated <strong>Frontend Developer</strong> with a strong
//               foundation in modern JavaSctipt & React. My approach focuses on
//               writing clean, maintainable code & optimizing perfomance for the
//               best user experience.
//             </p>

//             <div className="about-stats" data-aos="fade-up">
//               <div className="stat-item" data-aos="fade-right">
//                 <span className="number">Self-Taught</span>
//                 <span className="label">Expertise</span>
//               </div>

//               <div className="stat-item" data-aos="fade-right">
//                 <span className="number">React</span>
//                 <span className="label">Specailist</span>
//               </div>
//             </div>
//           </div>

//           <div className="about-image" data-aos="fade-left">
//             <img src={HeroImage} alt="Hero Image" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import HeroImage from "../assets/hero.jpg";

// export default function About() {
//   const bgRef = useRef(null);

//   // Keep your interactive mouse glow effect
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

//   return (
//     <section
//       id="about"
//       className="mx-auto py-28 px-6 md:px-12 bg-[#080808] text-[#f5f5f5] relative overflow-hidden">
//       <div ref={bgRef} className="max-w-7xl mx-auto glow-wrapper relative z-10">
//         {/* Section Header */}
//         <div className="text-center md:text-left mb-16 border-b border-white/10 pb-8">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-[10px] tracking-[0.4em] text-[#d4af37] uppercase block mb-3">
//             Atelier Profile
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="font-serif text-3xl md:text-5xl tracking-[0.1em] text-white">
//             Professional Profile
//           </motion.h2>
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           {/* Left Column: Description & Stats */}
//           <div className="lg:col-span-7 space-y-8">
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="text-neutral-300 text-base md:text-lg tracking-[0.1em] font-light leading-relaxed">
//               A dedicated{" "}
//               <strong className="text-white font-medium">
//                 Frontend Developer
//               </strong>{" "}
//               with a strong foundation in modern JavaScript & React. My approach
//               focuses on writing clean, maintainable code & optimizing
//               performance for the best user experience.
//             </motion.p>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-2 gap-6 pt-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#d4af37]/50 transition-all duration-300 group">
//                 <span className="block font-serif text-2xl md:text-3xl text-white mb-1 group-hover:text-[#d4af37] transition-colors">
//                   Self-Taught
//                 </span>
//                 <span className="text-[10px] tracking-[0.3em] uppercase text-[#d4af37]">
//                   Expertise
//                 </span>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#d4af37]/50 transition-all duration-300 group">
//                 <span className="block font-serif text-2xl md:text-3xl text-white mb-1 group-hover:text-[#d4af37] transition-colors">
//                   React
//                 </span>
//                 <span className="text-[10px] tracking-[0.3em] uppercase text-[#d4af37]">
//                   Specialist
//                 </span>
//               </motion.div>
//             </div>
//           </div>

//           {/* Right Column: Profile Image with Luxury Frame */}
//           <div className="lg:col-span-5 relative">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1 }}
//               className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 aspect-[4/5] shadow-2xl group">
//               <img
//                 src={HeroImage}
//                 alt="Lakshan Sandeepa"
//                 className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>

//               <div className="absolute bottom-6 left-6 right-6">
//                 <span className="text-[10px] tracking-[0.3em] uppercase text-[#d4af37] block mb-1">
//                   Lakshan Sandeepa
//                 </span>
//                 <h4 className="font-serif text-lg text-white tracking-widset">
//                   Frontend Engineer &amp; UI Creator
//                 </h4>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FiCode, FiLayout, FiCpu, FiAward } from "react-icons/fi";
// import HeroImage from "../assets/hero.jpg";

// export default function About() {
//   const bgRef = useRef(null);

//   // Advanced mouse glow tracking for interactive container
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

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 25 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <section
//       id="about"
//       className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-[#080808] text-[#f5f5f5] relative overflow-hidden">
//       <div ref={bgRef} className="max-w-7xl mx-auto glow-wrapper relative z-10">
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
//           <div>
//             <motion.span
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-[10px] tracking-[0.4em] text-[#d4af37] uppercase block mb-3">
//               System Architecture &amp; Philosophy
//             </motion.span>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="font-serif text-3xl md:text-5xl tracking-[0.1em] text-white uppercase">
//               Architecting Digital{" "}
//               <span className="italic font-light text-neutral-400">
//                 Experiences
//               </span>
//             </motion.h2>
//           </div>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-neutral-400 text-xs tracking-[0.2em] max-w-xs mt-4 md:mt-0 font-light">
//             Bridging rigorous component engineering with uncompromising visual
//             aesthetics.
//           </motion.p>
//         </div>

//         {/* Bento Grid Layout */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-12 gap-6">
//           {/* Bento Card 1: Main Bio & Core Philosophy (Span 7) */}
//           <motion.div
//             variants={itemVariants}
//             className="md:col-span-7 p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group hover:border-[#d4af37]/50 transition-all duration-500">
//             <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-3xl group-hover:bg-[#d4af37]/10 transition-all"></div>

//             <div>
//               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] mb-8">
//                 <FiCode size={22} />
//               </div>
//               <h3 className="font-serif text-2xl tracking-[0.05em] text-white mb-4">
//                 Frontend Developer &amp; UI Kit Architect
//               </h3>
//               <p className="text-neutral-300 text-sm md:text-base tracking-wider font-light leading-relaxed mb-6">
//                 As an indie hacker and UI creator, I specialize in building
//                 high-performance web applications using{" "}
//                 <strong className="text-white font-medium">
//                   React, Tailwind CSS, and Framer Motion
//                 </strong>
//                 . My engineering philosophy revolves around atomic component
//                 design, micro-interactions, and immaculate state orchestration.
//               </p>
//             </div>

//             <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
//               {[
//                 "React 19",
//                 "Tailwind v4",
//                 "TypeScript",
//                 "Vite",
//                 "UI Systems",
//                 "Framer Motion",
//               ].map((tech, idx) => (
//                 <span
//                   key={idx}
//                   className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-[0.2em] uppercase text-neutral-300">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </motion.div>

//           {/* Bento Card 2: Profile Image with Grayscale Luxury Effect (Span 5) */}
//           <motion.div
//             variants={itemVariants}
//             className="md:col-span-5 relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 aspect-[4/5] md:aspect-auto group shadow-2xl">
//             <img
//               src={HeroImage}
//               alt="Lakshan Sandeepa"
//               className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
//             <div className="absolute bottom-8 left-8 right-8">
//               <span className="text-[10px] tracking-[0.3em] uppercase text-[#d4af37] block mb-1">
//                 Atelier Creator
//               </span>
//               <h4 className="font-serif text-xl text-white tracking-[0.1em]">
//                 Lakshan Sandeepa
//               </h4>
//             </div>
//           </motion.div>

//           {/* Bento Card 3: UI Kit Ecosystem & Indie Building (Span 4) */}
//           <motion.div
//             variants={itemVariants}
//             className="md:col-span-4 p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-[#d4af37]/50 transition-all duration-500 group">
//             <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] mb-6">
//               <FiLayout size={22} />
//             </div>
//             <h4 className="font-serif text-xl text-white tracking-[0.05em] mb-3">
//               UI Component Ecosystems
//             </h4>
//             <p className="text-neutral-400 text-xs tracking-wider font-light leading-relaxed">
//               Crafting modular component packs like SyncXel, integrating
//               signature aesthetic styles from Neo-Brutalism to Minimalist
//               Glassmorphism.
//             </p>
//           </motion.div>

//           {/* Bento Card 4: Performance & Clean Code Standards (Span 4) */}
//           <motion.div
//             variants={itemVariants}
//             className="md:col-span-4 p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-[#d4af37]/50 transition-all duration-500 group">
//             <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] mb-6">
//               <FiCpu size={22} />
//             </div>
//             <h4 className="font-serif text-xl text-white tracking-[0.05em] mb-3">
//               Performance Optimization
//             </h4>
//             <p className="text-neutral-400 text-xs tracking-wider font-light leading-relaxed">
//               Obsessed with Lighthouse scores, bundle size reduction, semantic
//               HTML, and fluid 60FPS Framer Motion layout transitions.
//             </p>
//           </motion.div>

//           {/* Bento Card 5: Autonomous & Self-Taught Mastery (Span 4) */}
//           <motion.div
//             variants={itemVariants}
//             className="md:col-span-4 p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-[#d4af37]/50 transition-all duration-500 group">
//             <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] mb-6">
//               <FiAward size={22} />
//             </div>
//             <h4 className="font-serif text-xl text-white tracking-[0.05em] mb-3">
//               Self-Taught Engineering
//             </h4>
//             <p className="text-neutral-400 text-xs tracking-wider font-light leading-relaxed">
//               Driven by continuous exploration, modern AI-assisted workflows,
//               and deep adherence to production-grade software craftsmanship.
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FiCode, FiLayout, FiCpu, FiAward } from "react-icons/fi";
// import HeroImage from "../assets/hero.jpg";

// export default function About() {
//   const bgRef = useRef(null);

//   // Advanced mouse glow tracking for interactive container
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

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 25 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <section
//       id="about"
//       className=" bg-[#080808] text-[#f5f5f5] relative overflow-hidden">
//       <div ref={bgRef} className="max-w-7xl mx-auto glow-wrapper relative z-10">
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
//           <div>
//             <motion.span
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-[10px] tracking-[0.4em] text-[#00ff88] uppercase block mb-3 font-semibold">
//               System Architecture &amp; Philosophy
//             </motion.span>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="font-serif text-3xl md:text-5xl tracking-[0.1em] text-white uppercase">
//               Professional{" "}
//               <span className="italic font-light text-neutral-400">
//                 Profile
//               </span>
//             </motion.h2>
//           </div>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-neutral-400 text-xs tracking-[0.2em] max-w-xs mt-4 md:mt-0 font-light">
//             Bridging rigorous component engineering with uncompromising visual
//             aesthetics.
//           </motion.p>
//         </div>

//         {/* Bento Grid Layout */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-12 gap-6">
//           {/* Bento Card 1: Main Bio & Core Philosophy (Span 7) */}
//           <motion.div
//             variants={itemVariants}
//             className="md:col-span-7 p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group hover:border-[#00ff88]/50 transition-all duration-500">
//             <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#00ff88]/5 rounded-full blur-3xl group-hover:bg-[#00ff88]/10 transition-all"></div>

//             <div>
//               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00ff88] mb-8">
//                 <FiCode size={22} />
//               </div>
//               <h3 className="font-serif text-2xl tracking-[0.05em] text-white mb-4">
//                 Frontend Developer &amp; UI Kit Creator
//               </h3>
//               <p className="text-neutral-300 text-sm md:text-base tracking-wider font-light leading-relaxed mb-6">
//                 A dedicated{" "}
//                 <strong className="text-white font-medium">
//                   Frontend Developer
//                 </strong>{" "}
//                 with a strong foundation in modern JavaScript &amp; React. My
//                 approach focuses on writing clean, maintainable code &amp;
//                 optimizing performance for the best user experience.
//               </p>

//               {/* Stats Section from your Sass code */}
//               <div className="grid grid-cols-2 gap-4 my-6 pt-4 border-t border-white/10">
//                 <div>
//                   <span className="block text-[#00ff88] text-2xl font-bold underline cursor-pointer hover:text-[#a0a0a0] transition-colors">
//                     Self-Taught
//                   </span>
//                   <span className="text-[#a0a0a0] text-xs uppercase tracking-wider">
//                     Expertise
//                   </span>
//                 </div>
//                 <div>
//                   <span className="block text-[#00ff88] text-2xl font-bold underline cursor-pointer hover:text-[#a0a0a0] transition-colors">
//                     React
//                   </span>
//                   <span className="text-[#a0a0a0] text-xs uppercase tracking-wider">
//                     Specialist
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
//               {[
//                 "React",
//                 "JavaScript",
//                 "Tailwind CSS",
//                 "UI Systems",
//                 "Vite",
//                 "Framer Motion",
//               ].map((tech, idx) => (
//                 <span
//                   key={idx}
//                   className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-[0.2em] uppercase text-neutral-300">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </motion.div>

//           {/* Bento Card 2: Profile Circular Image with Glow (Span 5) */}
//           <motion.div
//             variants={itemVariants}
//             className="md:col-span-5 relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 aspect-[4/5] md:aspect-auto flex flex-col items-center justify-center p-8 group shadow-2xl">
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
//             <img
//               src={HeroImage}
//               alt="Lakshan Sandeepa"
//               className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-2 border-white/10 group-hover:border-[#00ff88] group-hover:shadow-[0_0_20px_#00ff88] transition-all duration-500 z-20 mb-6"
//             />
//             <div className="relative z-20 text-center">
//               <span className="text-[10px] tracking-[0.3em] uppercase text-[#00ff88] block mb-1">
//                 Atelier Creator
//               </span>
//               <h4 className="font-serif text-xl text-white tracking-[0.1em]">
//                 Lakshan Sandeepa
//               </h4>
//             </div>
//           </motion.div>

//           {/* Bento Card 3: UI Kit Ecosystem (Span 4) */}
//           <motion.div
//             variants={itemVariants}
//             className="md:col-span-4 p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-[#00ff88]/50 transition-all duration-500 group">
//             <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00ff88] mb-6">
//               <FiLayout size={22} />
//             </div>
//             <h4 className="font-serif text-xl text-white tracking-[0.05em] mb-3">
//               UI Component Ecosystems
//             </h4>
//             <p className="text-neutral-400 text-xs tracking-wider font-light leading-relaxed">
//               Crafting modular component packs like SyncXel, integrating
//               signature aesthetic styles from Neo-Brutalism to Minimalist
//               Glassmorphism.
//             </p>
//           </motion.div>

//           {/* Bento Card 4: Performance Optimization (Span 4) */}
//           <motion.div
//             variants={itemVariants}
//             className="md:col-span-4 p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-[#00ff88]/50 transition-all duration-500 group">
//             <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00ff88] mb-6">
//               <FiCpu size={22} />
//             </div>
//             <h4 className="font-serif text-xl text-white tracking-[0.05em] mb-3">
//               Performance Optimization
//             </h4>
//             <p className="text-neutral-400 text-xs tracking-wider font-light leading-relaxed">
//               Obsessed with Lighthouse scores, bundle size reduction, semantic
//               HTML, and fluid 60FPS Framer Motion layout transitions.
//             </p>
//           </motion.div>

//           {/* Bento Card 5: Self-Taught Engineering (Span 4) */}
//           <motion.div
//             variants={itemVariants}
//             className="md:col-span-4 p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-[#00ff88]/50 transition-all duration-500 group">
//             <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00ff88] mb-6">
//               <FiAward size={22} />
//             </div>
//             <h4 className="font-serif text-xl text-white tracking-[0.05em] mb-3">
//               Self-Taught Engineering
//             </h4>
//             <p className="text-neutral-400 text-xs tracking-wider font-light leading-relaxed">
//               Driven by continuous exploration, modern AI-assisted workflows,
//               and deep adherence to production-grade software craftsmanship.
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiMapPin,
  FiClock,
  FiZap,
} from "react-icons/fi";
import AboutImage from "../assets/hero.jpg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const focusAreas = [
  "UI Engineering",
  "Component Systems",
  "Performance",
  "Motion Design",
];

const learning = [
  "Advanced TypeScript",
  "Motion choreography",
  "Accessibility",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-ink px-5 py-24 text-paper sm:px-10 lg:px-[5%] lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          <motion.p
            variants={item}
            className="mb-4 text-sm tracking-[0.25em] text-muted uppercase">
            About
          </motion.p>

          <motion.h2
            variants={item}
            className="font-display text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
            Engineer by craft.
            <br />
            <span className="text-violet-brand">Creator by habit.</span>
          </motion.h2>

          <motion.div
            variants={item}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide">
            <span className="size-2 rounded-full bg-violet-brand" />
            Frontend Developer · Founder of SyncXel
          </motion.div>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6">
          {/* Bio */}
          <motion.div
            variants={item}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md md:col-span-4 lg:p-9">
            <p className="text-lg leading-relaxed text-paper/90 sm:text-xl">
              I’m Lakshan, a frontend developer from Sri Lanka building clean,
              fast and interactive web interfaces with React, Tailwind CSS and
              Motion.
            </p>

            <p className="mt-5 text-base leading-relaxed text-muted">
              I’m the founder of{" "}
              <a
                href="https://syncxel.com"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-violet-soft underline-offset-4 transition hover:underline">
                SyncXel
              </a>
              , where I design and build modern, reusable UI components for
              developers.
            </p>

            <p className="mt-5 text-base leading-relaxed text-muted">
              I work remotely with clients and teams worldwide, focusing on
              detail, performance and a smooth user experience.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-muted transition hover:border-violet-brand hover:text-violet-soft">
                  {area}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            variants={item}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] md:col-span-2">
            <img
              src={AboutImage}
              alt="Lakshan Sandeepa"
              className="h-full min-h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/15 bg-ink/70 px-3.5 py-2 text-xs backdrop-blur-md">
              <FiMapPin className="text-violet-brand" />
              Sri Lanka · GMT+5:30
            </div>
          </motion.div>

          {/* SyncXel */}
          <motion.a
            variants={item}
            href="https://syncxel.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-violet-brand/25 bg-violet-brand/[0.08] p-7 transition hover:border-violet-brand/50 md:col-span-3 lg:p-8">
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-[0.2em] text-violet-soft uppercase">
                Currently building
              </span>

              <FiArrowUpRight className="text-violet-soft transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">
              SyncXel
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              A modern component library offering reusable React, Tailwind CSS
              and Motion UI components for developers.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-violet-soft">
              <FiZap />
              Founder & Frontend Engineer
            </div>
          </motion.a>

          {/* Now learning */}
          <motion.div
            variants={item}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:col-span-3 lg:p-8">
            <span className="text-xs tracking-[0.2em] text-muted uppercase">
              Now learning
            </span>

            <div className="mt-5 flex flex-col gap-3">
              {learning.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm">
                  <span className="size-1.5 rounded-full bg-violet-brand" />
                  {topic}
                </div>
              ))}
            </div>
          </motion.div>

          {/* GitHub activity */}
          <motion.div
            variants={item}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:col-span-4 lg:p-8">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs tracking-[0.2em] text-muted uppercase">
                <FiGithub />
                GitHub activity
              </span>

              <a
                href="https://github.com/lakshan-beast"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-violet-soft transition hover:text-paper">
                View profile
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/5 bg-ink-soft p-4">
              {/* <img
                src="https://ghchart.rshah.org/7C3AED/lakshan-beast"
                alt="Lakshan GitHub contribution graph"
                className="w-full"
                loading="lazy"
              /> */}
              <img
                src="https://ghchart.rshah.org/7C3AED/lakshan-beast"
                alt="GitHub contribution graph"
                className="w-full"
                style={{
                  filter:
                    "invert(1) hue-rotate(180deg) brightness(0.9) contrast(0.85)",
                }}
              />
            </div>

            <p className="mt-4 text-xs text-muted">
              Building in public — components, experiments and client work.
            </p>
          </motion.div>

          {/* Availability + CTA */}
          <motion.div
            variants={item}
            className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:col-span-2 lg:p-8">
            <div>
              <span className="flex items-center gap-2 text-xs tracking-[0.2em] text-muted uppercase">
                <FiClock />
                Availability
              </span>

              <p className="mt-4 text-sm text-paper/90">
                Open to remote frontend roles, freelance projects and
                collaborations worldwide.
              </p>
            </div>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center justify-between rounded-full bg-violet-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-soft">
              Let’s build something
              <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
