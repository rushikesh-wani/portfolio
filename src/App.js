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
      <div className="bg-[#2b2b2b] bg-[radial-gradient(#ffffff33_1px,#101426_1px)] bg-[size:20px_20px] ">
        <HeroSectionDuplicate />
        <About />
        <Skills />
        <Project />
      </div>
      <Footer />
    </div>
  );
}

export default App;
