// import { motion } from "framer-motion";
// import MenuButton from "./MenuButton";

// const navLinks = [
//   { label: "About", href: "#about" },
//   { label: "Experience", href: "#experience" },
//   { label: "Projects", href: "#projects" },
//   { label: "Skills", href: "#skills" },
//   { label: "Contact", href: "#contact" },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// export default function Hero() {
//   return (
//     <section className="relative flex min-h-screen flex-col justify-between p-6 sm:p-10 lg:p-14">
//       <div className="flex items-start justify-between">
//         <motion.a
//           href="#top"
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           custom={0}
//           className="font-display text-lg font-bold tracking-tight">
//           Lakshan<span className="text-violet-brand">.</span>
//         </motion.a>

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           custom={1}
//           className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-wide sm:flex">
//           <span className="size-2 rounded-full bg-violet-brand" />
//           Available for 2026
//         </motion.div>
//       </div>

//       <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           custom={2}
//           className="max-w-2xl">
//           <p className="mb-4 text-sm tracking-[0.25em] text-muted uppercase">
//             Frontend Developer
//           </p>

//           <h1 className="font-display text-5xl leading-[1.05] font-extrabold sm:text-7xl lg:text-8xl">
//             Building clean,
//             <br />
//             interactive
//             <br />
//             <span className="text-violet-brand">web experiences.</span>
//           </h1>

//           <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
//             I design and build modern interfaces with React, Tailwind CSS and
//             Motion — focused on performance, detail and real user experience.
//           </p>

//           <div className="mt-8 flex flex-wrap items-center gap-4">
//             <a
//               href="#projects"
//               className="rounded-full bg-violet-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-soft">
//               View Projects
//             </a>

//             <a
//               href="#contact"
//               className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-violet-brand hover:text-violet-soft">
//               Contact Me
//             </a>
//           </div>
//         </motion.div>

//         <motion.nav
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           custom={3}
//           className="hidden flex-col items-end gap-3 lg:flex">
//           {navLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               className="group flex items-center gap-3 text-sm text-muted transition hover:text-paper">
//               {link.label}
//               <span className="h-px w-6 bg-white/20 transition-all group-hover:w-10 group-hover:bg-violet-brand" />
//             </a>
//           ))}
//         </motion.nav>
//       </div>

//       <MenuButton links={navLinks} />
//     </section>
//   );
// }

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import MenuButton from "./MenuButton";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.25 * i,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  const heroRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const spotlight = useMotionTemplate`
    radial-gradient(540px circle at ${springX}px ${springY}px,
    rgba(124, 58, 237, 0.36),
    transparent 70%)
  `;

  const handleMouseMove = (event) => {
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen flex-col justify-between overflow-hidden py-8 px-6 pb-18 sm:p-10 lg:p-16">
      {/* Cursor spotlight */}
      <motion.div
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0"
      />

      {/* Center outline name */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[18vw] leading-none font-black tracking-tighter text-transparent uppercase select-none sm:text-[15vw]"
          style={{
            WebkitTextStroke: "1px rgba(245, 245, 245, 0.15)",
          }}>
          Lakshan
        </motion.h2>
      </div>

      {/* Top row */}
      <div className="relative z-10 flex items-start justify-between">
        <motion.a
          href="#top"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="font-display text-3xl font-bold tracking-tight">
          Lakshan<span className="text-violet-brand">.</span>
        </motion.a>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide backdrop-blur-md sm:flex font-primary">
          <span className="size-2 rounded-full bg-violet-brand animate-pulse" />
          Available for 2026
        </motion.div>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 flex flex-col justify-between gap-12 lg:flex-row lg:items-end sm:bottom-12 lg:bottom-0">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="max-w-2xl">
          <p className="mb-4 text-sm tracking-[0.25em] text-muted uppercase">
            Frontend Developer
          </p>

          <h1 className="font-display leading-none font-extrabold text-6xl sm:text-7xl lg:text-8xl">
            Building clean,
            <br />
            interactive
            <br />
            <span className="text-violet-brand">web experiences.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg leading-4.5 font-primary font-normal">
            I design and build modern interfaces with React, Tailwind CSS and
            Framer Motion — focused on performance, detail and real user
            experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2 font-primary">
            <a
              href="#projects"
              className="rounded-full bg-violet-brand px-6 py-3 text-sm text-white transition hover:bg-violet-soft">
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm transition hover:border-violet-brand hover:text-violet-soft">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.nav
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="hidden flex-col items-end gap-3 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-3 text-lg text-muted transition hover:text-paper">
              {link.label}
              <span className="h-px w-6 bg-white/20 transition-all group-hover:w-10 group-hover:bg-violet-brand" />
            </a>
          ))}
        </motion.nav>
      </div>

      <MenuButton />
    </section>
  );
}
