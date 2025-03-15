import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import EducationData from "./components/EducationData";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <EducationData />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
