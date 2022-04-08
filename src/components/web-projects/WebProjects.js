import React from 'react';
import '../../css/web-projects/WebProjects.css';
import Cloud from './Cloud';

function WebProjects() {
  return (
    <div id='projects'>
      <div className='projects-container'>
        <div className='projects-header'>
          <div className='projects-title-desc'>
            <h1>Projects.</h1>
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
              , I had the opportunity to learn and experiment with a diverse
              tech stack to create fun and exciting web applications either with
              team members, or by myself.
            </p>
          </div>
          <Cloud />
        </div>
      </div>
    </div>
  );
}

export default WebProjects;
