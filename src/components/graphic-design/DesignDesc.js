import React, { useState } from 'react';
import '../../css/graphic-design/DesignDesc.css';

function DesignDesc() {
  const [xd, setXD] = useState(false);
  const [ps, setPS] = useState(false);
  const [ind, setIND] = useState(false);
  const [ai, setAI] = useState(false);
  const [pp, setPP] = useState(false);
  const [ae, setAE] = useState(false);

  return (
    <div id='design'>
      <div className='designs-desc'>
        <div className='designs-title-desc'>
          <h1>Graphic Design.</h1>
          <p>
            Before I got into web development, I've been working as a graphic
            designer. I have interests in{' '}
            <span
              className='xd'
              onMouseOver={() => setXD(true)}
              onMouseLeave={() => setXD(false)}
            >
              UI/UX design
            </span>
            ,{' '}
            <span
              className='ps'
              onMouseOver={() => setPS(true)}
              onMouseLeave={() => setPS(false)}
            >
              illustration
            </span>
            ,{' '}
            <span
              className='ind'
              onMouseOver={() => setIND(true)}
              onMouseLeave={() => setIND(false)}
            >
              digital and print publication
            </span>
            , and{' '}
            <span
              className='ai'
              onMouseOver={() => setAI(true)}
              onMouseLeave={() => setAI(false)}
            >
              branding
            </span>
            .<br />
            <br />
            I'm proficient in <strong>Adobe Creative Cloud</strong> applications
            and also have some experience in{' '}
            <span
              className='pp'
              onMouseOver={() => setPP(true)}
              onMouseLeave={() => setPP(false)}
            >
              video editing
            </span>{' '}
            and{' '}
            <span
              className='ae'
              onMouseOver={() => setAE(true)}
              onMouseLeave={() => setAE(false)}
            >
              animation
            </span>
            .
          </p>
        </div>
        <div className='adobe-icons'>
          <div className='icon-row-1'>
            <img
              src='/graphic-design/adobe-icons/InDesign.png'
              alt=''
              style={{
                boxShadow: ind
                  ? '0px 0px 40px 0px rgba(255, 48, 102, 0.8)'
                  : 'none',
              }}
            />
            <img
              src='/graphic-design/adobe-icons/Photoshop.png'
              alt=''
              style={{
                boxShadow: ps
                  ? '0px 0px 40px 0px rgba(48, 168, 255, 0.8)'
                  : 'none',
              }}
            />
            <img
              src='/graphic-design/adobe-icons/Illustrator.png'
              alt=''
              style={{
                boxShadow: ai
                  ? '0px 0px 40px 0px rgba(255, 154, 0, 0.8)'
                  : 'none',
              }}
            />
          </div>
          <div className='icon-row-2'>
            <img
              src='/graphic-design/adobe-icons/XD.png'
              alt=''
              style={{
                boxShadow: xd
                  ? '0px 0px 40px 0px rgba(255, 97, 247, 0.8)'
                  : 'none',
              }}
            />

            <img
              src='/graphic-design/adobe-icons/PremierePro.png'
              alt=''
              style={{
                boxShadow: pp
                  ? '0px 0px 40px 0px rgba(153, 153, 255, 0.8)'
                  : 'none',
              }}
            />
            <img
              src='/graphic-design/adobe-icons/AfterEffects.png'
              alt=''
              style={{
                boxShadow: ae
                  ? '0px 0px 40px 0px rgba(153, 153, 255, 0.8)'
                  : 'none',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignDesc;
