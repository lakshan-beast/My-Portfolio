import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import ProjectsCard from "./components/ProjectsCard";
import SkillCard from "./components/SkillCard";
import Contact from "./components/Contact";

import Footer from "./components/Footer";

import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <ProjectsCard />
      <SkillCard />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
