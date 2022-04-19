import React from 'react';
import Nav from './components/general/Nav';
import Hero from './components/general/Hero';
import ProjectDesc from './components/web-projects/ProjectDesc';
import DesignDesc from './components/graphic-design/DesignDesc';
import Designs from './components/graphic-design/Designs';
import Illustrations from './components/illustration/IllustrationDesc';
import Contact from './components/general/Contact';
import Footer from './components/general/Footer';

function App() {
  return (
    <div className='app'>
      <Nav />
      <div className='content'>
        <Hero />
        <ProjectDesc />
        <DesignDesc />
        <Designs />
        <Illustrations />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
