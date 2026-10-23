// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// export default function MenuButton({ links }) {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onKeyDown = (event) => {
//       if (event.key === "Escape") setOpen(false);
//     };

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         className="fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm backdrop-blur-md transition hover:border-violet-brand lg:hidden"
//         aria-label="Open menu">
//         Menu
//         <span className="flex flex-col gap-1">
//           <span className="block h-0.5 w-5 bg-paper" />
//           <span className="block h-0.5 w-3 bg-violet-brand" />
//         </span>
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "100%" }}
//             transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//             className="fixed inset-0 z-40 flex flex-col justify-end bg-ink/95 p-6 backdrop-blur-xl sm:p-10">
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-6 right-6 rounded-full border border-white/10 px-4 py-2 text-sm">
//               Close
//             </button>

//             <nav className="mb-16 flex flex-col gap-5">
//               {links.map((link, index) => (
//                 <motion.a
//                   key={link.label}
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.15 + index * 0.07, duration: 0.5 }}
//                   className="font-display text-4xl font-bold sm:text-6xl">
//                   {link.label}
//                 </motion.a>
//               ))}
//             </nav>

//             <div className="flex items-center justify-between border-t border-white/10 pt-6 text-sm text-muted">
//               <span>Kandy, Sri Lanka</span>
//               <span className="text-violet-brand">Available for 2026</span>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// export default function MenuButton({ links }) {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onKeyDown = (event) => {
//       if (event.key === "Escape") setOpen(false);
//     };

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         className="fixed right-5 bottom-5 z-50 flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-lg backdrop-blur-md transition hover:border-violet-brand lg:hidden"
//         aria-label="Open menu">
//         Menu
//         <span className="flex flex-col gap-1">
//           <span className="block h-1 w-5 rounded-sm bg-paper" />
//           <span className="block h-1 w-3 rounded-sm bg-violet-brand" />
//         </span>
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             key="menu-overlay"
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "100%" }}
//             transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//             className="fixed inset-0 z-40 flex flex-col justify-end bg-ink/95 p-6 pb-15 backdrop-blur-xl sm:p-10">
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-6 right-6 rounded-full border border-white/10 px-4 py-2 text-sm">
//               Close
//             </button>

//             <nav className="mb-16 flex flex-col gap-5">
//               {links.map((link, index) => (
//                 <motion.a
//                   key={link.label}
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.15 + index * 0.07, duration: 0.5 }}
//                   className="font-display text-4xl font-bold sm:text-6xl">
//                   {link.label}
//                 </motion.a>
//               ))}
//             </nav>

//             <div className="flex items-center  justify-between border-t border-white/10 pt-6 text-sm text-muted pb-16">
//               <span>Kandy, Sri Lanka</span>
//               <span className="text-violet-brand">Available for 2026</span>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router";
// import { AnimatePresence, motion } from "framer-motion";

// const homeLinks = [
//   { label: "About", href: "#about" },
//   { label: "Experience", href: "#experience" },
//   { label: "Projects", href: "#projects" },
//   { label: "Skills", href: "#skills" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function MenuButton() {
//   const [open, setOpen] = useState(false);
//   const { pathname } = useLocation();

//   const links =
//     pathname === "/projects"
//       ? [{ label: "Home", to: "/" }, ...homeLinks.slice(3)]
//       : homeLinks;

//   useEffect(() => {
//     const onKeyDown = (event) => {
//       if (event.key === "Escape") setOpen(false);
//     };

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         className="fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm backdrop-blur-md transition hover:border-violet-brand lg:hidden"
//         aria-label="Open menu">
//         Menu
//         <span className="flex flex-col gap-1">
//           <span className="block h-0.5 w-5 bg-paper" />
//           <span className="block h-0.5 w-3 bg-violet-brand" />
//         </span>
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             key="menu-overlay"
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "100%" }}
//             transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//             className="fixed inset-0 z-40 flex flex-col justify-end bg-ink/95 p-6 backdrop-blur-xl sm:p-10">
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-6 right-6 rounded-full border border-white/10 px-4 py-2 text-sm">
//               Close
//             </button>

//             <nav className="mb-16 flex flex-col gap-5">
//               {links.map((link, index) => (
//                 <motion.div
//                   key={link.label}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.15 + index * 0.07, duration: 0.5 }}>
//                   {link.to ? (
//                     <Link
//                       to={link.to}
//                       onClick={() => setOpen(false)}
//                       className="font-display text-4xl font-bold sm:text-6xl">
//                       {link.label}
//                     </Link>
//                   ) : (
//                     <a
//                       href={link.href}
//                       onClick={() => setOpen(false)}
//                       className="font-display text-4xl font-bold sm:text-6xl">
//                       {link.label}
//                     </a>
//                   )}
//                 </motion.div>
//               ))}
//             </nav>

//             <div className="flex items-center justify-between border-t border-white/10 pt-6 text-sm text-muted">
//               <span>Kandy, Sri Lanka</span>
//               <span className="text-violet-brand">Available for 2026</span>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

const homeLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function MenuButton() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links =
    pathname === "/projects"
      ? [{ label: "Home", to: "/" }, ...homeLinks.slice(3)]
      : homeLinks;

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-5 bottom-5 z-50 flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-lg backdrop-blur-md transition hover:border-violet-brand lg:hidden"
        aria-label="Open menu">
        {/* Menu */}
        <span className="flex flex-col gap-1">
          <span className="block h-1 w-6 bg-paper rounded-2xl" />
          <span className="block h-1 w-3 bg-violet-brand rounded-2xl" />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu-overlay"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-end bg-ink/95 p-6 backdrop-blur-xl sm:p-10">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 rounded-full border border-white/10 px-4 py-2 text-sm">
              Close
            </button>

            <nav className="mb-16 flex flex-col gap-5">
              {links.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.07, duration: 0.5 }}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="font-display text-4xl font-bold sm:text-6xl">
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-4xl font-bold sm:text-6xl">
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="flex items-center justify-between border-t border-white/10 pt-6 pb-16 text-lg text-muted">
              <span>Kandy, Sri Lanka</span>
              <span className="text-violet-brand">Available for 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
