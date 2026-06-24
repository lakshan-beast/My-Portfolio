import { useEffect, useRef } from "react";
import HeroImage from "../assets/hero.jpg";

const About = () => {
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

  return (
    <section className="about" id="about" data-aos-offset="0">
      <div
        className="about-container glow-wrapper "
        data-aos="fade-up"
        ref={bgRef}>
        <h2 className="section-title" data-aos="fade-up">
          Professional Profile
        </h2>

        <div className="about-wrapper">
          <div className="about-text">
            <p data-aos="fade-up">
              A dedicated <strong>Frontend Developer</strong> with a strong
              foundation in modern JavaSctipt & React. My approach focuses on
              writing clean, maintainable code & optimizing perfomance for the
              best user experience.
            </p>

            <div className="about-stats" data-aos="fade-up">
              <div className="stat-item" data-aos="fade-right">
                <span className="number">Self-Taught</span>
                <span className="label">Expertise</span>
              </div>

              <div className="stat-item" data-aos="fade-right">
                <span className="number">React</span>
                <span className="label">Specailist</span>
              </div>
            </div>
          </div>

          <div className="about-image" data-aos="fade-left">
            <img src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
