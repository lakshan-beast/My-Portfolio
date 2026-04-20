import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { SiFreelancer } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="logo">
            <h1>Lakshan</h1>
          </div>

          <div className="footer-links">
            <a href="#">
              <FiGithub />
            </a>
            <a href="#">
              <FiLinkedin />
            </a>
            <a href="#">
              <SiFreelancer />
            </a>
          </div>

          <p>
            <AiOutlineCopyright /> {currentYear} | Desgined & Built by
            <span>Lakshan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
