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

function App() {
  return (
    <div className="min-h-screen bg-white px-[100px]">
      <Header />
      <About />
      {/* <TechStackExperience /> */}
      <Experience />
      <Projects />
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