import React from 'react';
import '../../css/web-projects/Project.css';

function SpotTheDiff() {
  return (
    <div className='project-name'>
      <div className='project-banner'>
        <img src='/web-projects/spotTheDiff.png' alt='' />
      </div>
      <div className='project-info'>
        <div className='project-header'>
          <a
            href={'https://s-arina.github.io'}
            target='_blank'
            rel='noreferrer'
          >
            <p>Spot the Difference</p>
          </a>
          <a
            href={'https://github.com/s-arina/s-arina.github.io'}
            target='_blank'
            rel='noreferrer'
          >
            <p>code</p>
          </a>
        </div>
        <div className='project-body'>
          <div className='project-details-container'>
            <div className='project-details'>
              <ul className='tech-stack'>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Firebase</li>
                <li>JavaScript</li>
                <li>Chart.js</li>
                <li>Bootstrap</li>
                <li>GitHub API</li>
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
