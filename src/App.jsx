import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Education from "./components/education";
import Certifications from "./components/certifications";
import Skills from "./components/skills";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import BackToTop from "./components/backtotop";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Certifications />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
