import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Hero from './Hero';
import ProjectDesc from './components/web-projects/ProjectDesc';
import DesignDesc from './components/graphic-design/DesignDesc';
import Designs from './components/graphic-design/Designs';
import IllustrationDesc from './components/illustration/IllustrationDesc';
import Contact from './components/Contact';

function App() {
  return (
    <div className='app'>
      <Nav />
      <div className='content'>
        <Hero />
        <ProjectDesc />
        <DesignDesc />
        <Designs />
        <IllustrationDesc />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
