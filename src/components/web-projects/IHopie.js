import React from 'react';
import '../../css/web-projects/Project.css';

function IHopie() {
  return (
    <div className='project-name'>
      <div className='project-banner'>
        <img src='/web-projects/ihopie.png' alt='' />
      </div>
      <div className='project-info'>
        <div className='project-header'>
          <a
            href={'https://ihopie.herokuapp.com'}
            target='_blank'
            rel='noreferrer'
          >
            <p>iHopie</p>
          </a>
          <a
            href={'https://github.com/Mars-Grace-Shopper/GraceShopper'}
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
