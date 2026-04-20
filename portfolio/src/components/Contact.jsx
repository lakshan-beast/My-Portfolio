import React from "react";
// import "../styles/pages/Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-sib">
          Have a project in Mind? Let's create something amazing together.
        </p>

        <div className="contact-wrapper">
          <form action="#" method="post">
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
                required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>Youremail@email.com</p>
            </div>

            <div className="info-item">
              <h3>Socails</h3>
              <a href="#">Linkedin</a>
              <a href="#">Github</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
