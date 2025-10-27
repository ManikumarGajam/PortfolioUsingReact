import React from 'react';
import Navigation from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactForm from './components/ContactForm';


function App() {
 React.useEffect(() => {
  const setDocHeight = () => {
    document.documentElement.style.setProperty('--doc-height', `${window.innerHeight}px`);
  };
  window.addEventListener('resize', setDocHeight);
  setDocHeight();
  return () => window.removeEventListener('resize', setDocHeight);
}, []);
  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: '#031d4a', color: '#e0f6ff' }}>
        <Home />
        <About />
        <section id="skills" style={{ padding: '60px 0', textAlign: 'center', backgroundColor: '#031d4a' }}>
          <h2 style={{ fontWeight: '700', fontSize: '2.6rem', marginBottom: '0.4em', color: '#14ffd9' }}>Skills</h2>
          <Skills />
        </section>
        <Projects />
        <Experience />
        <Education />
        <ContactForm />
        <footer style={{ textAlign: "center", padding: "20px 0", color: "#fffefeff", fontSize: "0.9rem" }}>
  © {new Date().getFullYear()} G. Manikumar | All Rights Reserved.
</footer>
        
      </main>
    </>
  );
}

export default App;
