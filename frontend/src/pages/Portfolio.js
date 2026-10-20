import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ToolsAndFrameworks from '../components/ToolsAndFrameworks';
import GitHub from '../components/GitHub';
import Experience from '../components/Experience';
import About from '../components/About';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Articles from '../components/Articles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
      <Header />
      <main>
        <Hero />
        <ToolsAndFrameworks />
        <GitHub />
        <Experience />
        <About />
        <Skills />
        <Achievements />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;