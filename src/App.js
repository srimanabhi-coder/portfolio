import React, { useEffect, useState } from 'react';
import './styles/globals.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SECTION_IDS = ['home', 'about', 'work', 'experience', 'skills', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="app">
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
