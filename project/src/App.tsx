import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Highlights } from './components/Highlights';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Blogs } from './components/Blogs';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
        <Blogs />
        <Contact />
      </main>
      <Chatbot />
    </div>
  );
}

export default App;