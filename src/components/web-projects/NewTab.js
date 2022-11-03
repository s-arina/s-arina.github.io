import React from 'react';
import { GithubIcon } from '../general/Icons';
import '../../css/web-projects/Project.css';

function NewTab() {
  return (
    <div className='project-name'>
      <div className='project-banner'>
        <img
          srcSet='/web-projects/web-projects-small/newTab_s.png 500w, /web-projects/newTab.png 1500w'
          sizes='(max-width: 500px) 500px, 1500px'
          src='/web-projects/newTab.png'
          alt=''
        />
      </div>
      <div className='project-info'>
        <div className='project-header'>
          <p>
            <a
              href='/web-projects/newTab.gif'
              aria-label='new-tab'
              target='_blank'
              rel='noreferrer'
            >
              New Tab Page
            </a>
          </p>
          <GithubIcon link='https://github.com/s-arina/NewTabExtension' />
        </div>
        <div className='project-body'>
          <div className='project-details-container'>
            <div className='project-details'>
              <ul className='tech-stack'>
                <li>JavaScript</li>
                <li>React</li>
                <li>Chrome Extensions</li>
                <li>Geolocation API</li>
                <li>OpenWeatherAPI</li>
                <li>Material UI</li>
              </ul>
            </div>
            <div className='project-desc'>
              <p>A new tab page extension made for Chrome.</p>
              <br />
              <p>
                This extension replaces Chrome's new tab page with a simple, yet
                charming layout with a notepad. Users are shown the current
                weather based on their location, and have multiple preset
                background options available. A custom background can also be
                added via hyperlink. Notes are saved locally so users have
                access to them across tabs and windows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTab;
