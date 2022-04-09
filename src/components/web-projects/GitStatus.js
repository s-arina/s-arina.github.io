import React from 'react';
import '../../css/web-projects/Project.css';

function GitStatus() {
  return (
    <div className='project-name'>
      <div className='project-banner'>
        <img src='/web-projects/gitstatus.png' alt='' />
      </div>
      <div className='project-info'>
        <div className='project-header'>
          <a
            href={'https://my-git-status.herokuapp.com'}
            target='_blank'
            rel='noreferrer'
          >
            <p>git status</p>
          </a>
          <p>
            <a
              href={'https://github.com/Team-Mango-Capstone/git-status'}
              target='_blank'
              rel='noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 22 22'
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
          </p>
        </div>
        <div className='project-body'>
          <div className='project-details-container'>
            <div className='project-details'>
              <h2>Developer | Designer</h2>
              <br />
              <h2>
                JavaScript | React.js | Firebase | Chart.js | Bootstrap | GitHub
                API
              </h2>
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
            <div className='project-team'>
              <h2>TEAM</h2>
              <img
                src='https://avatars.githubusercontent.com/u/93007802?v=4'
                alt=''
              />
              <img
                src='https://media-exp1.licdn.com/dms/image/C4D03AQHuPDeE9PbrkQ/profile-displayphoto-shrink_100_100/0/1618247848050?e=1654732800&v=beta&t=At-xOE2jB1EEt7IJqtWVRsF3xuU5ImU7BiqAv4LCFJ0'
                alt=''
              />
              <img
                src='https://media-exp1.licdn.com/dms/image/C4D03AQH5np9oC0B2qg/profile-displayphoto-shrink_800_800/0/1516996171075?e=1654732800&v=beta&t=H7V6Aq-aLgh2VD6ZdWCQPze3v2F27CVo4KCozj3qnE8'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitStatus;
