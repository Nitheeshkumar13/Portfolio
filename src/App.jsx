import About from "./about"
import Contact from "./Contact"
import Hero from "./hero"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Skills from "./Skills"

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
