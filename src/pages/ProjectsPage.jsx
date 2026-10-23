// import { Link } from "react-router";
// import { motion } from "framer-motion";
// import { FiArrowLeft } from "react-icons/fi";

// export default function ProjectsPage() {
//   return (
//     <main className="min-h-screen bg-ink px-5 py-24 text-paper sm:px-10">
//       <div className="mx-auto max-w-[1200px]">
//         <Link
//           to="/"
//           className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-paper">
//           <FiArrowLeft />
//           Back home
//         </Link>

//         <motion.h1
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="mt-8 font-display text-4xl font-extrabold sm:text-6xl">
//           All projects
//           <span className="text-violet-brand">.</span>
//         </motion.h1>

//         <p className="mt-4 max-w-xl text-muted">
//           Client work, learning projects and SyncXel UI packs — coming together
//           in one organized view.
//         </p>
//       </div>
//     </main>
//   );
// }

import { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiGithub,
  FiLock,
  FiZap,
} from "react-icons/fi";

const tabs = [
  { id: "client", label: "Client Work" },
  { id: "learning", label: "Learning Projects" },
  { id: "packs", label: "SyncXel UI Packs" },
];

const clientProjects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website designed and developed for a hospitality professional, including experience, skills and contact sections.",
    stack: ["React", "Tailwind CSS", "Motion", "Vercel"],
    status: "approved",
    liveUrl: "#",
  },
  {
    title: "Vesper Perfume",
    description:
      "An e-commerce experience for a perfume business, including product browsing and a premium dark/gold storefront design.",
    stack: ["React", "Tailwind CSS", "Motion", "Supabase"],
    status: "private",
  },
];

const learningProjects = [
  {
    title: "Dream Track",
    subtitle: "Study Tracker",
    description:
      "A premium academic management system with gamified focus timers and past paper analytics.",
    stack: ["React", "Firebase", "Recharts"],
    liveUrl: "#",
    githubUrl: "https://github.com/lakshan-beast",
  },
  {
    title: "Educa",
    subtitle: "Learning Platform",
    description:
      "An educational resource hub providing students with organized, downloadable study materials.",
    stack: ["React", "SASS", "Firebase"],
    liveUrl: "#",
    githubUrl: "https://github.com/lakshan-beast",
  },
  {
    title: "Unseen Tapro",
    subtitle: "Travel Platform",
    description:
      "A travel exploration platform dedicated to uncovering and showcasing hidden destinations across Sri Lanka.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/lakshan-beast",
  },
  {
    title: "Info.lanka",
    subtitle: "Services Portal",
    description:
      "A centralized web portal designed to streamline access to verified Sri Lankan government services.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/lakshan-beast",
  },
];

const uiPacks = [
  { name: "Footers", url: "https://syncxel.com/ui-packs/footers" },
  { name: "Navbars", url: "https://syncxel.com/ui-packs/navbars" },
  { name: "Authentication", url: "https://syncxel.com/ui-packs/auth" },
  { name: "Pricing", url: "https://syncxel.com/ui-packs/pricing" },
  { name: "FAQ", url: "https://syncxel.com/ui-packs/faq" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("client");

  return (
    <main className="min-h-screen bg-ink px-5 py-24 text-paper sm:px-10 lg:px-[5%]">
      <div className="mx-auto max-w-[1300px]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-paper">
          <FiArrowLeft />
          Back home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-10">
          <p className="mb-4 text-sm tracking-[0.25em] text-muted uppercase">
            All Projects
          </p>

          <h1 className="font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Selected work
            <span className="text-violet-brand">.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-muted">
            Client work, learning projects and SyncXel UI packs — a complete
            view of what I build, ship and maintain.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "border-violet-brand bg-violet-brand/15 text-violet-soft"
                  : "border-white/10 bg-white/5 text-muted hover:border-white/25 hover:text-paper"
              }`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {activeTab === "client" && (
              <motion.div
                key="client"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {clientProjects.map((project) => (
                  <div
                    key={project.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md lg:p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-xs tracking-[0.2em] text-muted uppercase">
                        Client project
                      </span>

                      {project.status === "approved" ? (
                        <span className="rounded-full border border-violet-brand/30 bg-violet-brand/10 px-3 py-1 text-xs text-violet-soft">
                          Live
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                          <FiLock className="text-xs" />
                          Private
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.status === "approved" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-soft transition hover:text-paper">
                        View live project
                        <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                    )}

                    {project.status === "private" && (
                      <p className="mt-7 text-xs text-muted">
                        Details available on request.
                      </p>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "learning" && (
              <motion.div
                key="learning"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {learningProjects.map((project) => (
                  <div
                    key={project.title}
                    className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition hover:border-violet-brand/40 lg:p-8">
                    <span className="text-xs tracking-[0.2em] text-muted uppercase">
                      {project.subtitle}
                    </span>

                    <h3 className="mt-4 font-display text-2xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center gap-6">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-violet-soft transition hover:text-paper">
                        Live demo
                        <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-paper">
                        <FiGithub />
                        GitHub
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "packs" && (
              <motion.div
                key="packs"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}>
                {/* Featured UI Packs card */}
                <div className="relative overflow-hidden rounded-3xl border border-violet-brand/25 bg-gradient-to-br from-violet-brand/[0.12] via-white/[0.03] to-transparent p-8 lg:p-12">
                  <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-violet-brand/20 blur-3xl" />

                  <div className="relative">
                    <span className="inline-flex items-center gap-2 rounded-full border border-violet-brand/30 bg-violet-brand/10 px-3.5 py-1.5 text-xs text-violet-soft">
                      <FiZap />
                      SyncXel Product
                    </span>

                    <h3 className="mt-6 font-display text-3xl font-extrabold sm:text-4xl">
                      SyncXel UI Packs
                    </h3>

                    <p className="mt-4 max-w-2xl text-muted">
                      Premium, production-ready UI packs built with React,
                      Tailwind CSS and Motion. Each pack includes multiple
                      ready-to-use designs with live previews and instant
                      download.
                    </p>

                    <a
                      href="https://syncxel.com/ui-packs"
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-8 inline-flex items-center gap-2 rounded-full bg-violet-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-soft">
                      View all UI packs
                      <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </div>

                {/* Pack deep links */}
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {uiPacks.map((pack) => (
                    <a
                      key={pack.name}
                      href={pack.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-violet-brand/50 hover:bg-violet-brand/[0.06]">
                      <div>
                        <h4 className="font-display text-lg font-bold">
                          {pack.name} Pack
                        </h4>

                        <p className="mt-1 text-xs text-muted">
                          View designs & purchase
                        </p>
                      </div>

                      <FiArrowUpRight className="text-violet-soft transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
