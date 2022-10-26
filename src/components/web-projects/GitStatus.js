import React from 'react';
import { GithubIcon, VideoLink } from '../general/Icons';
import '../../css/web-projects/Project.css';

function GitStatus() {
  return (
    <div className='project-name'>
      <div className='project-banner'>
        <img src='/web-projects/gitstatus.png' alt='' />
      </div>
      <div className='project-info'>
        <div className='project-header'>
          <p>
            <a
              href={'https://my-git-status.herokuapp.com'}
              target='_blank'
              rel='noreferrer'
            >
              git status
            </a>
          </p>
          <div className='project-links'>
            <VideoLink link='https://www.youtube.com/watch?v=NcA4VZ95P2c' />
            <GithubIcon link='https://github.com/Team-Mango-Capstone/git-status' />
          </div>
        </div>
        <div className='project-body'>
          <div className='project-details-container'>
            <div className='project-details'>
              <ul className='tech-stack'>
                <li>JavaScript</li>
                <li>React</li>
                <li>Firebase</li>
                <li>Chart.js</li>
                <li>Bootstrap</li>
                <li>GitHub API</li>
              </ul>
            </div>
            <div className='project-desc'>
              <p>
                git status is a developer-focused, visualization-driven
                productivity app that provides personalized insights on GitHub
                usage and a dashboard for setting and tracking goals.
              </p>
              <br />
              <p>
                Upon logging in with their GitHub credentials, users can access
                a wealth of GitHub usage information in one centralized
                location. Armed with the above insights, users can also set and
                monitor productivity goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitStatus;
