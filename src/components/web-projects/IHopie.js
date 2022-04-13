import React from 'react';
import '../../css/web-projects/Project.css';

function IHopie() {
  return (
    <div className='project-name'>
      <div className='project-banner'>
        <img src='/website/web-projects/ihopie.png' alt='' />
      </div>
      <div className='project-info'>
        <div className='project-header'>
          <p>
            <a
              href={'https://ihopie.herokuapp.com'}
              target='_blank'
              rel='noreferrer'
            >
              iHopie
            </a>
          </p>

          <a
            href={'https://github.com/Mars-Grace-Shopper/GraceShopper'}
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
                <li>React.js</li>
                <li>Redux</li>
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
            {/* <div className='project-team'>
              <h2>TEAM</h2>
              <img
                src='https://ca.slack-edge.com/T024FPYBQ-U02SYMP1AEA-68bcf56a00b3-512'
                alt=''
              />
              <img
                src='https://ca.slack-edge.com/T024FPYBQ-U02SQPGSL0P-g186df45de57-512'
                alt=''
              />
              <img
                src='https://media-exp1.licdn.com/dms/image/C4E03AQGyIb49RgzbzQ/profile-displayphoto-shrink_100_100/0/1649191401766?e=1654732800&v=beta&t=UlFQwtNtwjhxg1vb1MInQhvHnmeJADQRfxr0dZPcSvg'
                alt=''
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IHopie;
