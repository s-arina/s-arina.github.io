import React from 'react';
import { GithubIcon } from '../general/Icons';
import '../../css/web-projects/Project.css';

function IHopie() {
  return (
    <div className='project-name'>
      <div className='project-banner'>
        <img
          srcSet='/web-projects/web-projects-small/ihopie_s.png 500w, /web-projects/ihopie.png 1500w'
          sizes='(max-width: 500px) 500px, 1500px'
          src='/web-projects/ihopie.png'
          alt=''
        />
      </div>
      <div className='project-info'>
        <div className='project-header'>
          <p>
            <a href={'https://ihopie.cf'} target='_blank' rel='noreferrer'>
              iHopie
            </a>
          </p>
          <GithubIcon link='https://github.com/Mars-Grace-Shopper/GraceShopper' />
        </div>
        <div className='project-body'>
          <div className='project-details-container'>
            <div className='project-details'>
              <ul className='tech-stack'>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Sequelize</li>
              </ul>
            </div>
            <div className='project-desc'>
              <p>
                iHopie is a shopping website where a user can create an account,
                browse through products, add items to their shopping cart and
                checkout. Authentication is setup with JWT and bcrypt, with a
                cart that persists through different users.
              </p>
              <br />
              <p>
                A CRUD app where users who are administrators can add, edit and
                delete products. Wireframes and CSS were done and implemented by
                me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IHopie;
