import Header from './components/Header';
import About from './components/About';
// import TechStack from './components/TechStackExperience';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import Certifications from './components/Certifications';
import SocialLinks from './components/SocialLinks';
// import Gallery from './components/Gallery';
// import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
// import TechStackExperience from './components/TechStackExperience';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function App() {
  const [aboutExpanded, setAboutExpanded] = useState(false);
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
    <div className="px-4 md:px-[100px]"></div>
      <Header />

      {/* Top-row compact controls for the three sections (30px gap, titles close together) */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex justify-center items-center gap-[30px]">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-light tracking-tight text-gray-900">ABOUT</h2>
            <button
              onClick={toggleAbout}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors flex items-center"
              aria-expanded={aboutExpanded}
              aria-label={aboutExpanded ? 'Hide About' : 'Show About'}
            >
              {aboutExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-lg font-light tracking-tight text-gray-900">EXPERIENCE</h2>
            <button
              onClick={toggleExp}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors flex items-center"
              aria-expanded={expExpanded}
              aria-label={expExpanded ? 'Hide Experience' : 'Show Experience'}
            >
              {expExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-lg font-light tracking-tight text-gray-900">PROJECTS</h2>
            <button
              onClick={toggleProj}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors flex items-center"
              aria-expanded={projExpanded}
              aria-label={projExpanded ? 'Hide Projects' : 'Show Projects'}
            >
              {projExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Shared content area: only one section renders here so content appears at the same position */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {aboutExpanded && <About expanded hideHeader />}
        {expExpanded && <Experience expanded hideHeader />}
        {projExpanded && <Projects expanded hideHeader />}
      </div>
      {/* <Certifications /> */}
      <SocialLinks />
      {/* <Gallery /> */}
      {/* <Footer /> */}
      <Chatbot />

      <div className="fixed bottom-0 left-0 right-0 h-24 pointer-events-none z-10">
  <div className="absolute inset-0 backdrop-blur-sm [mask-image:linear-gradient(transparent,black)]"></div>
</div>
    </div>
  );
}

export default App;