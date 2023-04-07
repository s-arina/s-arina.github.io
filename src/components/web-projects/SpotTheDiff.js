import React from 'react';
import { GithubIcon } from '../general/Icons';
import '../../css/web-projects/Project.css';

function SpotTheDiff() {
  return (
    <div className='project-name'>
      <div className='project-banner'>
        <img
          srcSet='/web-projects/web-projects-small/spotTheDiff_s.png 500w, /web-projects/spotTheDiff.png 1500w'
          sizes='(max-width: 500px) 500px, 1500px'
          src='/web-projects/spotTheDiff.png'
          alt=''
        />
      </div>
      <div className='project-info'>
        <div className='project-header'>
          <p>
            <a
              href={'https://cat-fe.netlify.com/'}
              target='_blank'
              rel='noreferrer'
            >
              Spot the Difference
            </a>
          </p>
          <GithubIcon link='https://github.com/s-arina/cat-fe' />
        </div>
        <div className='project-body'>
          <div className='project-details-container'>
            <div className='project-details'>
              <ul className='tech-stack'>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className='project-desc'>
              <p>
                Using my own artwork, I created a simple, straightforward spot
                the difference game where the player has slightly over a minute
                to win.
              </p>
              <br />
              <p>
                This was my first opportunity to combine both my art as well as
                my love for games to create something cute and fun. I hope to
                implement more levels in the future!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotTheDiff;
