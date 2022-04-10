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
          <a
            href={'https://github.com/Team-Mango-Capstone/git-status'}
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
            {/* <div className='project-team'>
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitStatus;
