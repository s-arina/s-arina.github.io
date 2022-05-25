import React from 'react';
import Nav from './components/general/Nav';
import Hero from './components/general/Hero';
import ProjectDesc from './components/web-projects/ProjectDesc';
import DesignDesc from './components/graphic-design/DesignDesc';
import Designs from './components/graphic-design/Designs';
import Illustrations from './components/illustration/IllustrationDesc';
import Contact from './components/general/Contact';
import Footer from './components/general/Footer';
import FadeInSection from './FadeInSection';
import './css/index.css';

function App() {
  return (
    <div className='app'>
      <Nav />
      <div className='content'>
        <FadeInSection>
          <Hero />
        </FadeInSection>

        <FadeInSection>
          <ProjectDesc />
        </FadeInSection>

        <FadeInSection>
          <DesignDesc />
        </FadeInSection>

        <FadeInSection>
          <Designs />
        </FadeInSection>

        <FadeInSection>
          <Illustrations />
        </FadeInSection>

        <FadeInSection>
          <Contact />
        </FadeInSection>

        <Footer />
      </div>
    </div>
  );
}

export default App;
