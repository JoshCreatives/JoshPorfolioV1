import Header from './components/Header';
import About from './components/About';
// import TechStack from './components/TechStackExperience';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import Certifications from './components/Certifications';
// import Gallery from './components/Gallery';
// import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
// import TechStackExperience from './components/TechStackExperience';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function App() {
  const [aboutExpanded, setAboutExpanded] = useState(true);
  const [expExpanded, setExpExpanded] = useState(false);
  const [projExpanded, setProjExpanded] = useState(false);

  const toggleAbout = () => {
    setAboutExpanded((prev) => {
      const next = !prev;
      if (next) {
        setExpExpanded(false);
        setProjExpanded(false);
      }
      return next;
    });
  };

  const toggleExp = () => {
    setExpExpanded((prev) => {
      const next = !prev;
      if (next) {
        setAboutExpanded(false);
        setProjExpanded(false);
      }
      return next;
    });
  };

  const toggleProj = () => {
    setProjExpanded((prev) => {
      const next = !prev;
      if (next) {
        setAboutExpanded(false);
        setExpExpanded(false);
      }
      return next;
    });
  };

  

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-[15px] md:px-6 lg:px-8 pt-[15px]">
        <Header
          onToggleAbout={toggleAbout}
          onToggleExp={toggleExp}
          onToggleProj={toggleProj}
        />

        {/* Top-row compact controls for the three sections (30px gap, titles close together) */}
        <div className="pt-2 pb-2">
          <div className="hidden md:flex flex-row flex-wrap justify-center items-center gap-3 md:gap-8">
            <div className="flex items-center gap-2 px-2">
              <h2 className="text-xs sm:text-sm md:text-lg font-light tracking-tight text-gray-900">ABOUT</h2>
              <button
                onClick={toggleAbout}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors flex items-center"
                aria-expanded={aboutExpanded}
                aria-label={aboutExpanded ? 'Hide About' : 'Show About'}
              >
                {aboutExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-center gap-2 px-2">
              <h2 className="text-xs sm:text-sm md:text-lg font-light tracking-tight text-gray-900">EXPERIENCE</h2>
              <button
                onClick={toggleExp}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors flex items-center"
                aria-expanded={expExpanded}
                aria-label={expExpanded ? 'Hide Experience' : 'Show Experience'}
              >
                {expExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-center gap-2 px-2">
              <h2 className="text-xs sm:text-sm md:text-lg font-light tracking-tight text-gray-900">PROJECTS</h2>
              <button
                onClick={toggleProj}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors flex items-center"
                aria-expanded={projExpanded}
                aria-label={projExpanded ? 'Hide Projects' : 'Show Projects'}
              >
                {projExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {/* CONTACT removed from top-row controls */}
          </div>
        </div>

        {/* Shared content area: only one section renders here so content appears at the same position */}
        <div>
          {aboutExpanded && <About expanded hideHeader />}
          {expExpanded && <Experience expanded hideHeader />}
          {projExpanded && <Projects expanded hideHeader />}
        </div>

        {/* Footer: compact note only (full contact lives inside CONTACT) */}
        <div className="mt-2">
          <div className="pt-2 border-t border-gray-100 flex items-center justify-center gap-2">
            <p className="text-xs text-gray-400" style={{ marginBottom: '30px' }}>© 2025 Josh Creatives. All rights reserved.</p>
          </div>
        </div>
      </div>
      {/* <Gallery /> */}
      {/* <Footer /> */}
      <Chatbot />

      
    </div>
  );
}

export default App;