// // import React from "react";

// // import { AiOutlineCopyright } from "react-icons/ai";
// // import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
// // import { SiFreelancer } from "react-icons/si";
// // import { FaRegEnvelope } from "react-icons/fa";

// // const Footer = () => {
// //   // copyright for currentyear
// //   const currentYear = new Date().getFullYear();

// //   return (
// //     <footer className="footer" data-aos-offset="0" data-aos="fade-up">
// //       <div className="footer-container">
// //         <div className="footer-content">
// //           {/* footer logo */}
// //           <div className="footer-logo">
// //             <h1>
// //               Lakshan<span>.</span>
// //             </h1>
// //             <p>Frontend Developer</p>
// //           </div>

// //           {/* footer socail links */}
// //           <div className="footer-links">
// //             <a href="https://github.com/lakshan-beast" target="_blank">
// //               <FiGithub />
// //             </a>
// //             <a
// //               href="https://www.linkedin.com/in/lakshan-sandeepa"
// //               target="_blank">
// //               <FiLinkedin />
// //             </a>
// //             <a href="mailto:lakshansandeepa0305@gmail.com">
// //               <FaRegEnvelope />
// //             </a>
// //           </div>

// //           {/* copyright clam */}
// //           <p className="copyright">
// //             <AiOutlineCopyright /> {currentYear} | Desgined & Built by
// //             <a href="https://github.com/lakshan-beast"> Lakshan</a>
// //           </p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// import React from "react";
// import {
//   FiGithub,
//   FiLinkedin,
//   FiMail,
//   FiArrowUpRight,
//   FiArrowUp,
// } from "react-icons/fi";
// import { FaRegCopyright } from "react-icons/fa6";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer id="contact" className="editorial-footer">
//       <div className="footer-container">
//         {/* 1. Header Bar: Logo, Subtitle & Scroll to Top */}
//         <div className="footer-top-bar">
//           <div className="footer-brand">
//             <span className="logo">
//               Lakshan<span className="dot">.</span>
//             </span>
//             <span className="role-tag">FRONTEND DEVELOPER</span>
//           </div>

//           <button
//             type="button"
//             onClick={scrollToTop}
//             className="back-to-top-btn">
//             <span className="btn-text">BACK TO TOP</span>
//             <div className="icon-wrapper">
//               <FiArrowUp />
//             </div>
//           </button>
//         </div>

//         {/* 2. Main Hero Headline & Direct Contact Meta */}
//         <div className="footer-main-hero">
//           <h2 className="editorial-headline">
//             LET'S <br />
//             COLLABORATE. <br />
//             <span className="muted-text">BUILD YOUR NEXT IDEA.</span>
//           </h2>

//           <div className="contact-meta-grid">
//             <div className="meta-item">
//               <p className="meta-label">Email Inquiry</p>
//               <a
//                 href="mailto:lakshansandeepa0305@gmail.com"
//                 className="meta-value email-link">
//                 lakshansandeepa0305@gmail.com
//               </a>
//             </div>

//             <div className="meta-item">
//               <p className="meta-label">Location & Status</p>
//               <p className="meta-value">Kandy, Sri Lanka 🇱🇰</p>
//               <div className="status-badge">
//                 <span className="pulse-dot"></span>
//                 <span>Available for Roles & Freelance</span>
//               </div>
//             </div>

//             <a
//               href="mailto:lakshansandeepa0305@gmail.com?subject=Project%20Inquiry"
//               className="get-in-touch-btn">
//               <span>GET IN TOUCH</span>
//               <FiArrowUpRight className="cta-icon" />
//             </a>
//           </div>
//         </div>

//         {/* 3. Bottom Bar: Social Links, Copyright & CTA Button */}
//         <div className="footer-bottom-bar">
//           <div className="footer-social-links">
//             <a
//               href="https://github.com/lakshan-beast"
//               target="_blank"
//               rel="noreferrer">
//               <FiGithub /> | <span>GitHub</span>
//             </a>
//             <a
//               href="https://www.linkedin.com/in/lakshan-sandeepa"
//               target="_blank"
//               rel="noreferrer">
//               <FiLinkedin /> | <span>LinkedIn</span>
//             </a>
//             <a href="mailto:lakshansandeepa0305@gmail.com">
//               <FiMail /> | <span>Email</span>
//             </a>
//             <a href=""></a>
//           </div>

//           <div className="footer-action-group">
//             {/* <p className="copyright-text">
//               <FaRegCopyright /> Copyrights {currentYear} | Designed & Built by
//               <a
//                 href="https://github.com/lakshan-beast"
//                 target="_blank"
//                 rel="noreferrer">
//                 Lakshan
//               </a>
//             </p> */}
//             <p className="copyright-text">
//               Copyright <FaRegCopyright /> {currentYear}
//               <span> SyncXel Web Solutions.</span> All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiArrowUp,
} from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.12 * i,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Colombo",
    });

    const updateTime = () => setTime(formatter.format(new Date()));

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="w-full border-t border-white/10 bg-ink px-5 pt-20 pb-10 text-paper lg:px-[5%] lg:pt-24 lg:pb-12"
    >
      <div className="mx-auto flex min-h-[70vh] max-w-[1400px] flex-col justify-between">
        {/* Top bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          className="flex items-center justify-between border-b border-white/10 pb-8"
        >
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-black tracking-widest uppercase">
              Lakshan<span className="text-violet-brand">.</span>
            </span>

            <span className="hidden text-xs tracking-widest text-muted/60 lg:inline">
              FRONTEND DEVELOPER
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 text-xs text-muted transition hover:text-paper"
          >
            <span className="hidden lg:inline">BACK TO TOP</span>

            <span className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 transition group-hover:-translate-y-0.5 group-hover:border-violet-brand group-hover:text-violet-soft">
              <FiArrowUp className="text-sm" />
            </span>
          </button>
        </motion.div>

        {/* Main hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          custom={1}
          className="my-14 lg:my-16"
        >
          <h2 className="font-display text-5xl leading-[0.92] font-black tracking-tighter uppercase sm:text-6xl lg:text-[5.5rem]">
            Let&rsquo;s
            <br />
            Collaborate.
            <br />
            <span className="text-muted/40">Build your next idea.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="mb-1.5 text-[0.65rem] tracking-[0.15em] text-muted/50 uppercase">
                  Email Inquiry
                </p>

                <a
                  href="mailto:lakshansandeepa0305@gmail.com"
                  className="block text-sm break-all transition hover:text-violet-brand"
                >
                  lakshansandeepa0305@gmail.com
                </a>
              </div>

              <div>
                <p className="mb-1.5 text-[0.65rem] tracking-[0.15em] text-muted/50 uppercase">
                  Location & Status
                </p>

                <p className="text-sm">Kandy, Sri Lanka 🇱🇰</p>

                <div className="mt-1.5 flex items-center gap-2 text-xs text-violet-brand">
                  <span className="size-1.5 animate-pulse rounded-full bg-violet-brand shadow-[0_0_10px_#7c3aed]" />
                  Available for Roles & Freelance
                </div>

                <p className="mt-2 text-xs text-muted">
                  Local time — {time}
                </p>
              </div>
            </div>

            <div className="flex items-start lg:justify-end">
              <a
                href="mailto:lakshansandeepa0305@gmail.com?subject=Project%20Inquiry"
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3 text-xs font-extrabold tracking-widest text-ink uppercase shadow-[0_0_20px_rgba(245,245,245,0.08)] transition hover:-translate-y-0.5 hover:bg-violet-brand hover:text-paper hover:shadow-[0_0_25px_rgba(124,58,237,0.4)]"
              >
                Get in touch
                <FiArrowUpRight className="text-sm transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
          className="flex flex-col items-center gap-8 border-t border-white/10 pt-8 lg:flex-row lg:justify-between"
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a
              href="https://github.com/lakshan-beast"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition hover:border-b hover:border-paper/50 hover:text-paper"
            >
              <FiGithub className="text-base" />
              <span className="hidden sm:inline">|</span>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/lakshan-sandeepa"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition hover:border-b hover:border-paper/50 hover:text-paper"
            >
              <FiLinkedin className="text-base" />
              <span className="hidden sm:inline">|</span>
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:lakshansandeepa0305@gmail.com"
              className="flex items-center gap-2 text-sm text-muted transition hover:border-b hover:border-paper/50 hover:text-paper"
            >
              <FiMail className="text-base" />
              <span className="hidden sm:inline">|</span>
              <span>Email</span>
            </a>
          </div>

          <p className="flex items-center gap-1.5 text-xs text-muted/60">
            Copyright <FaRegCopyright /> {currentYear}
            <span>SyncXel Web Solutions. All rights reserved.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}