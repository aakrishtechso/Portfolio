import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Startups from './components/Startups';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AskAjeet from './components/AskAjeet';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Startups />
        <Projects />
        <Skills />
        <AskAjeet />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
