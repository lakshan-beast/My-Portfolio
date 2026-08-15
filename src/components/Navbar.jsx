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

import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

import { TiThMenuOutline } from "react-icons/ti";
import { FaBarsStaggered } from "react-icons/fa6";
// < />
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="editorial-navbar">
      <div className="nav-container">
        
        {/* Brand Logo */}
        <a href="#hero" className="nav-logo">
          <span className="logo-text">Lakshan</span>
          <span className="logo-dot">.</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Status Badge (Desktop Only) */}
        <div className="status-badge desktop-only">
          <span className="pulse-dot"></span>
          <span>AVAILABLE FOR ROLES</span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="menu-toggle-btn mobile-only"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <IoMdClose /> : <FaBarsStaggered />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Overlay */}
      {isOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-status-container">
            <div className="status-badge">
              <span className="pulse-dot"></span>
              <span>AVAILABLE FOR ROLES</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}