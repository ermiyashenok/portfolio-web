/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import FlowField from './components/FlowField';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        {/* Global particle flow-field canvas */}
        <FlowField />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

