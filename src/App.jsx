import { MotionConfig } from "framer-motion";

import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
// import ProjectsCard from "./components/ProjectsCard";
// import SkillCard from "./components/SkillCard";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main id="top" className="relative min-h-screen bg-ink text-paper">
        <Hero />

        <About />
        <Experience />
        {/* <ProjectsCard /> */}
        {/* <SkillCard /> */}
        {/* <Contact /> */}

        <Footer />
      </main>
    </MotionConfig>
  );
}