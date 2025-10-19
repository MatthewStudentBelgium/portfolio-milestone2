import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderNav from "./components/HeaderNav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <HeaderNav />
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;