import React from 'react';
import { GithubIcon } from '../general/Icons';
import '../../css/web-projects/Project.css';

function NewTab() {
  return (
    <div className='project-name'>
      <div className='project-banner'>
        <img src='/web-projects/newTab.png' alt='' />
      </div>
      <div className='project-info'>
        <div className='project-header'>
          <p>
            <a href='/web-projects/newTab.gif' target='_blank' rel='noreferrer'>
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
                <li>React.js</li>
                <li>Chrome Extensions</li>
                <li>Geolocation API</li>
                <li>WeatherAPI</li>
                <li>Material UI</li>
              </ul>
            </div>
            <div className='project-desc'>
              <p>A new tab page extension made for Chrome.</p>
              <br />
              <p>
                This extension replaces Chrome's new tab page with a simple, yet
                charming layout with a notepad. Users are shown the current
                weather based on their location, and have different background
                options available. Notes are saved locally so users have access
                to them across tabs and windows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTab;
