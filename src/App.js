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
      <div className="fixed w-screen h-screen z-[-2] bg-[#2b2b2b] bg-[radial-gradient(#ffffff33_1px,#101426_1px)] bg-[size:20px_20px] "></div>
      {/* <div className="fixed w-screen h-screen z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%__80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <HeroSectionDuplicate />
      <About />
      <Skills />
      <Project />

      <Footer />
    </div>
  );
}

export default App;
