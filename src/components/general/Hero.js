import React from 'react';
import '../../css/general/Hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='logo'>
          <img src='/imgs/logo.gif' alt='' />
        </div>
        <div className='intro'>
          <h2>Hi,</h2>
          <div className='type-box'>
            <div className='typed'>
              <h1> I'm Sarina.</h1>
            </div>
          </div>
          <h2>Web Developer / Graphic Designer / Illustrator</h2>
        </div>
      </div>
      <a href='#projects'>
        <div className='chevron-container'>
          <div className='chevron'></div>
          <div className='chevron'></div>
          <div className='chevron'></div>
        </div>
      </a>
    </div>
  );
}

export default Hero;
