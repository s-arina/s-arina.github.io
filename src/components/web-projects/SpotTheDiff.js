import React from 'react';
import '../../css/web-projects/Project.css';

function SpotTheDiff() {
  return (
    <div className='project-name'>
      <div className='project-banner'>
        <img src='/website/web-projects/spotTheDiff.png' alt='' />
      </div>
      <div className='project-info'>
        <div className='project-header'>
          <p>
            <a
              href={'https://s-arina.github.io'}
              target='_blank'
              rel='noreferrer'
            >
              Spot the Difference
            </a>
          </p>

          <a
            href={'https://github.com/s-arina/s-arina.github.io'}
            target='_blank'
            rel='noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              viewBox='0 0 24 24'
              fill='none'
              stroke='red'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-github'
            >
              <title>GitHub</title>
              <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
            </svg>
          </a>
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
            {/* <div className='project-team'></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotTheDiff;
