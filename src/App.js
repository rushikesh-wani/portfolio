import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
