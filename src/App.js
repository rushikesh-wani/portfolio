import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HeroSectionDuplicate from "./components/HeroSectionDuplicate";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSectionDuplicate />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
