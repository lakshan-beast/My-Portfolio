// import React from "react";

// import { AiOutlineCopyright } from "react-icons/ai";
// import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
// import { SiFreelancer } from "react-icons/si";
// import { FaRegEnvelope } from "react-icons/fa";

// const Footer = () => {
//   // copyright for currentyear
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer" data-aos-offset="0" data-aos="fade-up">
//       <div className="footer-container">
//         <div className="footer-content">
//           {/* footer logo */}
//           <div className="footer-logo">
//             <h1>
//               Lakshan<span>.</span>
//             </h1>
//             <p>Frontend Developer</p>
//           </div>

//           {/* footer socail links */}
//           <div className="footer-links">
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

//           {/* copyright clam */}
//           <p className="copyright">
//             <AiOutlineCopyright /> {currentYear} | Desgined & Built by
//             <a href="https://github.com/lakshan-beast"> Lakshan</a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiArrowUp,
} from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="editorial-footer">
      <div className="footer-container">
        {/* 1. Header Bar: Logo, Subtitle & Scroll to Top */}
        <div className="footer-top-bar">
          <div className="footer-brand">
            <span className="logo">
              Lakshan<span className="dot">.</span>
            </span>
            <span className="role-tag">FRONTEND DEVELOPER</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn">
            <span className="btn-text">BACK TO TOP</span>
            <div className="icon-wrapper">
              <FiArrowUp />
            </div>
          </button>
        </div>

        {/* 2. Main Hero Headline & Direct Contact Meta */}
        <div className="footer-main-hero">
          <h2 className="editorial-headline">
            LET'S <br />
            COLLABORATE. <br />
            <span className="muted-text">BUILD YOUR NEXT IDEA.</span>
          </h2>

          <div className="contact-meta-grid">
            <div className="meta-item">
              <p className="meta-label">Email Inquiry</p>
              <a
                href="mailto:lakshansandeepa0305@gmail.com"
                className="meta-value email-link">
                lakshansandeepa0305@gmail.com
              </a>
            </div>

            <div className="meta-item">
              <p className="meta-label">Location & Status</p>
              <p className="meta-value">Kandy, Sri Lanka 🇱🇰</p>
              <div className="status-badge">
                <span className="pulse-dot"></span>
                <span>Available for Roles & Freelance</span>
              </div>
            </div>

            <a
              href="mailto:lakshansandeepa0305@gmail.com?subject=Project%20Inquiry"
              className="get-in-touch-btn">
              <span>GET IN TOUCH</span>
              <FiArrowUpRight className="cta-icon" />
            </a>
          </div>
        </div>

        {/* 3. Bottom Bar: Social Links, Copyright & CTA Button */}
        <div className="footer-bottom-bar">
          <div className="footer-social-links">
            <a
              href="https://github.com/lakshan-beast"
              target="_blank"
              rel="noreferrer">
              <FiGithub /> | <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lakshan-sandeepa"
              target="_blank"
              rel="noreferrer">
              <FiLinkedin /> | <span>LinkedIn</span>
            </a>
            <a href="mailto:lakshansandeepa0305@gmail.com">
              <FiMail /> | <span>Email</span>
            </a>
            <a href=""></a>
          </div>

          <div className="footer-action-group">
            {/* <p className="copyright-text">
              <FaRegCopyright /> Copyrights {currentYear} | Designed & Built by
              <a
                href="https://github.com/lakshan-beast"
                target="_blank"
                rel="noreferrer">
                Lakshan
              </a>
            </p> */}
            <p className="copyright-text">
              Copyright <FaRegCopyright /> {currentYear}
              <span> SyncXel Web Solutions.</span> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
