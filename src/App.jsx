// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="cv-container">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
