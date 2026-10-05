import Navbar from "./components/Navbar";
import About from "./pages/About";
import Tech from "./pages/Tech";
import Projects from "./pages//Projects";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section id="home">
        <About />
      </section>

      <section id="tech-stack">
        <Tech />
      </section>

      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}