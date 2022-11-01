import React from 'react';
import { GithubIcon } from '../general/Icons';
import '../../css/web-projects/Project.css';

function OpenAI() {
  return (
    <div className='project-name'>
      <div className='project-banner'>
        <img
          srcSet='/web-projects/web-projects-small/openai_s.png 500w, /web-projects/openai.png 1500w'
          sizes='(max-width: 500px) 500px, 1500px'
          src='/web-projects/openai.png'
          alt=''
        />
      </div>
      <div className='project-info'>
        <div className='project-header'>
          <p>
            <a
              href={'https://sarina-shopify.netlify.app'}
              target='_blank'
              rel='noreferrer'
            >
              Fun with AI
            </a>
          </p>
          <div className='project-links'>
            <GithubIcon link='https://github.com/s-arina/Shopify_FE_Challenge' />
          </div>
        </div>
        <div className='project-body'>
          <div className='project-details-container'>
            <div className='project-details'>
              <ul className='tech-stack'>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>OpenAI API</li>
              </ul>
            </div>
            <div className='project-desc'>
              <p>
                A coding challenge issued by Shopify to create an app utilizing
                OpenAI's API to generate answers in response to a user-input
                prompt.
              </p>
              <br />
              <p>
                Users can type a question or a request, and choose from a list
                of OpenAI's engines to retrieve their response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenAI;
