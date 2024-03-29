import React from 'react';
import '../../css/general/Hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='logo'>
          <img
            srcSet='/imgs/logo.gif 583w,
                  /imgs/logo_s.gif 200w'
            sizes='(max-width: 500px) 200px, 583px'
            src='/imgs/logo.gif'
            alt='logo'
          />
        </div>
        <div className='intro'>
          <h2>Hi,</h2>
          <div className='type-box'>
            <div className='typed'>
              <h1> I'm Sarina.</h1>
            </div>
          </div>
          <h2>Web Developer &#183; Graphic Designer &#183; Illustrator</h2>
        </div>
      </div>
      <a href='#projects' aria-label='chevron'>
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
