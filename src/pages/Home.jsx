import { useEffect, useRef } from "react";

import { FiGithub, FiX, FiLinkedin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";

const Home = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (bgRef.current) {
        const rect = bgRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        bgRef.current.style.setProperty("--x", `${x}px`);
        bgRef.current.style.setProperty("--y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const text = `Specailizing in Building scalable, accessible, & pixel perfect web applications. I bridge the gap between complex backend logic & intuitive frontend experience.`;

  return (
    <section className="hero" id="hero">
      <div className="hero-container glow-wrapper" ref={bgRef}>
        <div className="hero-content">
          <h1 className="header" data-aos="fade-up">
            Crafting High-Perfomance
            <span className="highlight"> User Interfaces</span> with React.
          </h1>

          <p className="reveal-text description" data-aos="fade-up">
            {text.split(" ").map((word, index) => (
              <span key={index} className="word">
                {word}&nbsp;
              </span>
            ))}
          </p>

          {/* hero buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary" data-aos="fade-right">
              View Portfolio
            </a>

            <a
              href="Lakshan_Sandeepa_CV.pdf"
              download="Lakshan_Sandeepa_CV.pdf"
              className="btn-secondary"
              data-aos="fade-left">
              Download Resume
            </a>
          </div>

          {/* socail media links */}
          <div className="hero-socail" data-aos="zoom-in">
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
        </div>
      </div>
    </section>
  );
};

export default Home;
