import React from 'react';
import '../../css/web-projects/ProjectDesc.css';
import Cloud from './Cloud';

function ProjectDesc() {
  return (
    <div id='projects'>
      <div className='projects-desc'>
        <div className='projects-title-desc'>
          <h1>Web Projects.</h1>
          <p>
            As a recent graduate of{' '}
            <a
              href={'https://gracehopper.com'}
              target='_blank'
              rel='noreferrer'
            >
              <span className='gh'>The Grace Hopper Program</span>
            </a>{' '}
            at{' '}
            <a
              href={'https://fullstackacademy.com'}
              target='_blank'
              rel='noreferrer'
            >
              <span className='fsa'>Fullstack Academy</span>
            </a>
            , I had the opportunity to learn and experiment with a diverse tech
            stack to create fun and innovative web applications with team
            members, or on my own.
            <br />
            <br />
            I'm always looking at new and different frameworks and libraries to
            add to my stack. I'm always a work in progress, and hope to only get
            better!
          </p>
        </div>
        <Cloud />
      </div>
    </div>
  );
}

export default ProjectDesc;
