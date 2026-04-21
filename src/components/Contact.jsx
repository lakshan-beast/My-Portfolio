import React from "react";
// import "../styles/pages/Contact.scss";
import { FiGithub, FiX, FiLinkedin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-sub">
          Have a project in Mind? Let's create something amazing together.
        </p>

        <div className="contact-wrapper">
          <form
            action="#"
            method="post"
            className="contact-form"
            data-aos="fade-right">
            <div className="input-group">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="useremail"
                id="useremail"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="input-group">
              <textarea
                name="text-msg"
                id="text-msg"
                rows="5"
                placeholder="Enter Message"
                required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          <div className="contact-info" data-aos="fade-left">
            <div className="info-item">
              <h3>Email</h3>
              <a href="mailto:lakshansandeepa0305@gmail.com">
                <FaRegEnvelope /> Youremail@email.com
              </a>
            </div>

            <div className="info-item socail-links">
              <h3>Socails</h3>
              <a href="#">
                <FiLinkedin /> Linkedin
              </a>
              <a href="#">
                <FiGithub /> Github
              </a>
              <a href="#">
                <FiX /> X
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
