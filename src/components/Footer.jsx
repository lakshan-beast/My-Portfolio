import React from "react";

import { AiOutlineCopyright } from "react-icons/ai";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { SiFreelancer } from "react-icons/si";
import { FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  // copyright for currentyear
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* footer logo */}
          <div className="footer-logo">
            <h1>
              Lakshan<span>.</span>
            </h1>
            <p>Frontend Developer</p>
          </div>

          {/* footer socail links */}
          <div className="footer-links">
            <a href="https://github.com/lakshan-beast" target="_blank">
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lakshan-sandeepa"
              target="_blank">
              <FiLinkedin />
            </a>
            <a href="mailto:lakshansandeepa0305@gmail.com">
              <FaRegEnvelope />
            </a>
          </div>

          {/* copyright clam */}
          <p className="copyright">
            <AiOutlineCopyright /> {currentYear} | Desgined & Built by
            <a href="https://github.com/lakshan-beast"> Lakshan</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
