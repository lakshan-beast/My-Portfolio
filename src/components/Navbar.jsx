// import React, { useState } from "react";

// import { TiThMenuOutline } from "react-icons/ti";
// import { IoMdClose } from "react-icons/io";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar__container">
//         {/* brand name */}
//         <div className="navbar__logo">
//           <h1>
//             Lakshan<span>.</span>
//           </h1>
//         </div>

//         {/* Desktop Links */}
//         <ul className={`nav-links ${isOpen ? "active" : ""}`}>
//           <li>
//             <a href="#hero" onClick={() => setIsOpen(false)}>
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#about" onClick={() => setIsOpen(false)}>
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#experince" onClick={() => setIsOpen(false)}>
//               Experience
//             </a>
//           </li>
//           <li>
//             <a href="#projects" onClick={() => setIsOpen(false)}>
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href="#skills" onClick={() => setIsOpen(false)}>
//               Skills
//             </a>
//           </li>

//           <li>
//             <a href="#contact" onClick={() => setIsOpen(false)}>
//               Contact
//             </a>
//           </li>
//         </ul>

//         {/* Mobile Toggle Button */}
//         <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <IoMdClose /> : <TiThMenuOutline />}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// // import { FiMenu, FiX } from "react-icons/fi";

// import { TiThMenuOutline } from "react-icons/ti";
// import { FaBarsStaggered } from "react-icons/fa6";
// // < />
// import { IoMdClose } from "react-icons/io";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Navigation Links
//   const navLinks = [
//     { name: "Home", href: "#hero" },
//     { name: "About", href: "#about" },
//     { name: "Experience", href: "#experience" },
//     { name: "Projects", href: "#projects" },
//     { name: "Skills", href: "#skills" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="editorial-navbar">
//       <div className="nav-container">

//         {/* Brand Logo */}
//         <a href="#hero" className="nav-logo">
//           <span className="logo-text">Lakshan</span>
//           <span className="logo-dot">.</span>
//         </a>

//         {/* Desktop Nav Links */}
//         <ul className="nav-links desktop-only">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a href={link.href}>{link.name}</a>
//             </li>
//           ))}
//         </ul>

//         {/* Status Badge (Desktop Only) */}
//         <div className="status-badge desktop-only">
//           <span className="pulse-dot"></span>
//           <span>AVAILABLE FOR ROLES</span>
//         </div>

//         {/* Mobile Menu Toggle Button */}
//         <button
//           type="button"
//           onClick={() => setIsOpen(!isOpen)}
//           className="menu-toggle-btn mobile-only"
//           aria-label="Toggle Navigation Menu"
//         >
//           {isOpen ? <IoMdClose /> : <FaBarsStaggered />}
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown Overlay */}
//       {isOpen && (
//         <div className="mobile-menu">
//           <ul className="mobile-nav-links">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <div className="mobile-status-container">
//             <div className="status-badge">
//               <span className="pulse-dot"></span>
//               <span>AVAILABLE FOR ROLES</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { IoMdClose } from "react-icons/io";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scroll detection for glassmorphism navbar intensity
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

//   // Navigation Links
//   const navLinks = [
//     { name: "Home", href: "#hero" },
//     { name: "About", href: "#about" },
//     { name: "Experience", href: "#experience" },
//     { name: "Projects", href: "#projects" },
//     { name: "Skills", href: "#skills" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-5 flex items-center justify-between ${
//         isScrolled
//           ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4"
//           : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
//       }`}>
//       {/* Brand Logo */}
//       <a href="#hero" className="group flex items-center space-x-1">
//         <span className="font-serif tracking-[0.2em] text-lg md:text-xl font-medium text-white group-hover:text-[#d4af37] transition-colors duration-300">
//           Lakshan
//         </span>
//         <span className="text-[#d4af37] text-xl font-bold">.</span>
//       </a>

//       {/* Desktop Nav Links */}
//       <ul className="hidden md:flex items-center space-x-8">
//         {navLinks.map((link) => (
//           <li key={link.name}>
//             <a
//               href={link.href}
//               className="text-xs tracking-[0.25em] uppercase text-neutral-300 hover:text-white transition-all duration-300 relative py-1 group">
//               {link.name}
//               <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           </li>
//         ))}
//       </ul>

//       {/* Status Badge (Desktop Only) */}
//       <div className="hidden lg:flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
//         <span className="relative flex h-2 w-2">
//           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
//           <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
//         </span>
//         <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-300">
//           Available For Roles
//         </span>
//       </div>

//       {/* Mobile Menu Toggle Button */}
//       <button
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white focus:outline-none hover:border-[#d4af37] transition-colors"
//         aria-label="Toggle Navigation Menu">
//         {isOpen ? <IoMdClose size={20} /> : <FaBarsStaggered size={18} />}
//       </button>

//       {/* Mobile Menu Dropdown Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//             className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-center px-8 md:hidden pt-24 pb-12">
//             <div className="flex flex-col space-y-6 items-center text-center">
//               <span className="text-[10px] tracking-[0.4em] text-[#d4af37] uppercase mb-2">
//                 Navigation
//               </span>
//               {navLinks.map((link, idx) => (
//                 <motion.a
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: idx * 0.08 + 0.1 }}
//                   className="font-serif text-2xl tracking-[0.2em] text-white hover:text-[#d4af37] transition-colors">
//                   {link.name}
//                 </motion.a>
//               ))}

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="pt-6 w-full max-w-xs flex items-center justify-center space-x-3 px-4 py-3 rounded-full bg-white/5 border border-white/10">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
//                 </span>
//                 <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-300">
//                   Available For Roles
//                 </span>
//               </motion.div>
//             </div>

//             <div className="mt-auto text-center text-neutral-500 text-[10px] tracking-[0.3em]">
//               © 2026 LAKSHAN SANDEEPA
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }
