import { useRef, useState } from "react";
import { FiGithub, FiX, FiLinkedin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import { IoMdCheckboxOutline } from "react-icons/io";
import { BiErrorCircle } from "react-icons/bi";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_efuwgks", // Service ID
        "template_m1hjtmm", // Template ID
        form.current,
        "aOi8_ZcSOp13Nnzxz", // Public Key
      )
      .then(() => {
        setStatus({
          message: "Message sent successfully!",
          icon: <IoMdCheckboxOutline />,
          type: "success",
        });
        e.target.reset(); // Form clear

        setTimeout(() => {
          setStatus(null);
        }, 5000);
      })
      .catch((error) => {
        setStatus({
          message: "Failed to send. Please try again.",
          icon: <BiErrorCircle />,
          type: "error",
        });
        console.log(error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-sub">
          Have a project in Mind? Let's create something amazing together.
        </p>

        <div className="contact-wrapper">
          {/* contact form */}
          <form
            onSubmit={sendEmail}
            ref={form}
            method="post"
            className="contact-form"
            data-aos="fade-right">
            <div className="input-group">
              <input
                type="text"
                name="from_name"
                id="from_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="input-group">
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Enter Message"
                required></textarea>
            </div>

            {/* status message */}
            {status && (
              <div className={`status-msg ${status.type}`}>
                {" "}
                {status.message} {status.icon}{" "}
              </div>
            )}
            {/* form submit button */}
            <button type="submit" disabled={isSending} className="submit-btn">
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* contact information */}
          <div className="contact-info" data-aos="fade-left">
            <div className="info-item">
              <h3>Email</h3>
              <a href="mailto:lakshansandeepa0305@gmail.com">
                <FaRegEnvelope />
              </a>
            </div>

            <div className="info-item ">
              <h3>Socails</h3>
              <a href="https://github.com/lakshan-beast" target="_blank">
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/lakshan-sandeepa"
                target="_blank">
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
