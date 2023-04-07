import React from 'react';
import '../../css/web-projects/ProjectDesc.css';
import Projects from './Projects';

function ProjectDesc() {
  return (
    <div id='projects'>
      <div className='projects-desc'>
        <div className='projects-title-desc'>
          <h1>Web Projects.</h1>
          <p>
            As an alumni of{' '}
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
            , I had the opportunity to experiment with a diverse tech stack to
            learn how to create fun and innovative web applications with team
            members and on my own.
          </p>
          <div className='skills'>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>CSS / SCSS</li>
            <li>HTML</li>
            <li>Node.js</li>
            <li>React / React Native</li>
            <li>Redux</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>PostgreSQL</li>
            <li>git</li>
            <li>Azure DevOps</li>
          </div>
        </div>
        <Projects />
      </div>
    </div>
  );
}

export default ProjectDesc;
