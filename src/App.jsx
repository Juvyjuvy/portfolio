import AestheticBackground from "./components/Background/AestheticBackground";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import FrontendIcebreaker from "./components/Icebreaker/FrontendIcebreaker";
import Projects from "./components/Projects/Projects";
import DesignLab from "./components/DesignLab/DesignLab";
import QuizGame from "./components/Game/QuizGame";
import Experience from "./components/Experience/Experience";
import Certification from "./components/Certification/Certification";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./index.css";

function App() {
  return (
    <>
      <AestheticBackground />
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="frontend-lab">
          <FrontendIcebreaker />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="ux-lab">
          <DesignLab />
        </section>

        <section id="quiz-game">
          <QuizGame />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="certification">
          <Certification />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;