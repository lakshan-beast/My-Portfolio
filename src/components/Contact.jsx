// import { useRef, useState } from "react";
// import { FiGithub, FiX, FiLinkedin } from "react-icons/fi";
// import { FaRegEnvelope } from "react-icons/fa";
// import { FcApproval, FcHighPriority } from "react-icons/fc";

// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const form = useRef();

//   const [isSending, setIsSending] = useState(false);
//   const [status, setStatus] = useState(null);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSending(true);
//     setStatus(null);

//     emailjs
//       .sendForm(
//         "service_efuwgks", // Service ID
//         "template_m1hjtmm", // Template ID
//         form.current,
//         "aOi8_ZcSOp13Nnzxz", // Public Key
//       )
//       .then(() => {
//         setStatus({
//           message: "Message sent successfully!",
//           icon: <FcApproval />,
//           type: "success",
//         });
//         e.target.reset(); // Form clear

//         setTimeout(() => {
//           setStatus(null);
//         }, 5000);
//       })
//       .catch((error) => {
//         setStatus({
//           message: "Failed to send. Please try again.",
//           icon: <FcHighPriority />,
//           type: "error",
//         });
//         console.log(error);
//       })
//       .finally(() => {
//         setIsSending(false);
//       });
//   };

//   return (
//     <section className="contact" id="contact" data-aos-offset="0">
//       <div className="contact-container" data-aos="fade-up">
//         <h2 className="section-title" data-aos="fade-up">
//           Get In Touch
//         </h2>
//         <p className="contact-sub" data-aos="fade-up">
//           Have a project in Mind? Let's create something amazing together.
//         </p>

//         <div className="contact-wrapper">
//           {/* contact form */}
//           <form
//             onSubmit={sendEmail}
//             ref={form}
//             method="post"
//             className="contact-form"
//             data-aos="fade-right">
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="from_name"
//                 id="from_name"
//                 placeholder="Your Name"
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <input
//                 type="email"
//                 name="user_email"
//                 id="user_email"
//                 placeholder="Your Email"
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <textarea
//                 name="message"
//                 id="message"
//                 rows="5"
//                 placeholder="Enter Message"
//                 required></textarea>
//             </div>

//             {/* status message */}
//             {status && (
//               <div className={`status-msg ${status.type}`}>
//                 {" "}
//                 {status.message} {status.icon}{" "}
//               </div>
//             )}
//             {/* form submit button */}
//             <button type="submit" disabled={isSending} className="submit-btn">
//               {isSending ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//           {/* contact form end */}

//           {/* contact information */}
//           <div className="contact-info" data-aos="fade-left">
//             <div className="info-item">
//               <h3>Follow Me</h3>
//               <a href="mailto:lakshansandeepa0305@gmail.com">
//                 <FaRegEnvelope />
//               </a>
//               <a href="https://github.com/lakshan-beast" target="_blank">
//                 <FiGithub />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/lakshan-sandeepa"
//                 target="_blank">
//                 <FiLinkedin />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCopy,
  FiCheck,
  FiArrowUpRight,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contact() {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState(false);

  const email = "lakshansandeepa0305@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setStatus({
        type: "error",
        message: "Could not copy email.",
      });
    }
  };
  
  

  const sendEmail = (e) => {
    e.preventDefault();

    // Honeypot — bots fill this
    if (e.target.website.value) return;

    setIsSending(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus({
          type: "success",
          message: "Message sent — I’ll get back to you soon.",
        });
        e.target.reset();
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Something went wrong. Please email me directly.",
        });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="relative bg-ink px-5 py-24 text-paper sm:px-10 lg:px-[5%] lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          <motion.p
            variants={item}
            className="mb-4 text-sm tracking-[0.25em] text-muted uppercase">
            Contact
          </motion.p>

          <motion.h2
            variants={item}
            className="font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Let’s build something
            <br />
            <span className="text-violet-brand">worth shipping.</span>
          </motion.h2>

          <motion.p variants={item} className="mt-5 max-w-xl text-muted">
            Have a project in mind, a role to discuss, or just want to talk
            frontend? Send a message — I usually reply within 24 hours.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={item}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md lg:col-span-3 lg:p-9">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="from_name"
                  className="mb-2 block text-xs tracking-wide text-muted">
                  Your name
                </label>

                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-white/10 bg-ink-soft px-4 py-3.5 text-sm outline-none transition placeholder:text-muted/50 focus:border-violet-brand"
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="mb-2 block text-xs tracking-wide text-muted">
                  Email
                </label>

                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-white/10 bg-ink-soft px-4 py-3.5 text-sm outline-none transition placeholder:text-muted/50 focus:border-violet-brand"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="project_type"
                className="mb-2 block text-xs tracking-wide text-muted">
                Project type
              </label>

              <select
                name="project_type"
                id="project_type"
                className="w-full rounded-2xl border border-white/10 bg-ink-soft px-4 py-3.5 text-sm outline-none transition focus:border-violet-brand">
                <option value="">Select an option</option>
                <option value="Website / Landing page">
                  Website / Landing page
                </option>
                <option value="Web application">Web application</option>
                <option value="UI components / Design system">
                  UI components / Design system
                </option>
                <option value="Frontend role">Frontend role</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-xs tracking-wide text-muted">
                Message
              </label>

              <textarea
                name="message"
                id="message"
                rows="5"
                required
                placeholder="Tell me about your project, timeline and goals..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-ink-soft px-4 py-3.5 text-sm outline-none transition placeholder:text-muted/50 focus:border-violet-brand"
              />
            </div>

            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {status && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-violet-brand/30 bg-violet-brand/10 text-violet-soft"
                    : "border-red-500/30 bg-red-500/10 text-red-400"
                }`}>
                {status.message}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-brand px-6 py-4 text-sm font-semibold text-white transition hover:bg-violet-soft disabled:opacity-50 sm:w-auto">
              {isSending ? "Sending..." : "Send message"}
              <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </motion.form>

          {/* Direct contact */}
          <motion.div
            variants={item}
            className="flex flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md lg:col-span-2 lg:p-9">
            <div>
              <span className="text-xs tracking-[0.2em] text-muted uppercase">
                Prefer email?
              </span>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="flex-1 break-all text-sm text-paper transition hover:text-violet-soft">
                  {email}
                </a>

                <button
                  onClick={copyEmail}
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-violet-brand hover:text-violet-soft"
                  aria-label="Copy email">
                  {copied ? <FiCheck /> : <FiCopy />}
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="https://github.com/lakshan-beast"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-sm text-muted transition hover:text-paper">
                  <FiGithub className="text-violet-soft" />
                  GitHub
                  <FiArrowUpRight className="ml-auto transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <a
                  href="https://www.linkedin.com/in/lakshan-sandeepa"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-sm text-muted transition hover:text-paper">
                  <FiLinkedin className="text-violet-soft" />
                  LinkedIn
                  <FiArrowUpRight className="ml-auto transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <FiMapPin className="text-violet-soft" />
                Sri Lanka · GMT+5:30
              </div>

              <div className="mt-3 flex items-center gap-2">
                <FiClock className="text-violet-soft" />
                Usually replies within 24 hours
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span className="size-2 animate-pulse rounded-full bg-violet-brand" />
                Open to remote work — 2026
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
