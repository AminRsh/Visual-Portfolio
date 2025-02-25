import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <NavBar />
              <Hero />
              <About />
              <Features />
              <Story />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
