import React, { useState } from 'react';
import '../../css/graphic-design/DesignDesc.css';

function DesignDesc() {
  const [xd, setXD] = useState(false);
  const [ps, setPS] = useState(false);
  const [ind, setIND] = useState(false);
  const [ai, setAI] = useState(false);
  const [pp, setPP] = useState(false);
  const [ae, setAE] = useState(false);

  const row1 = [
    {
      id: 1,
      url: 'InDesign.png',
      name: ind,
      boxShadow: '255, 48, 102, 0.8',
    },
    {
      id: 2,
      url: 'Photoshop.png',
      name: ps,
      boxShadow: '48, 168, 255, 0.8',
    },
    {
      id: 3,
      url: 'Illustrator.png',
      name: ai,
      boxShadow: '255, 48, 102, 0.8',
    },
  ];

  const row2 = [
    {
      id: 1,
      url: 'XD.png',
      name: xd,
      boxShadow: '255, 97, 247, 0.8',
    },
    {
      id: 2,
      url: 'PremierePro.png',
      name: pp,
      boxShadow: '153, 153, 255, 0.8',
    },
    {
      id: 3,
      url: 'AfterEffects.png',
      name: ae,
      boxShadow: '153, 153, 255, 0.8',
    },
  ];

  return (
    <div id='design'>
      <div className='designs-desc'>
        <div className='designs-title-desc'>
          <h1>Graphic Design.</h1>
          <p>
            Before my journey into web development, I was (and still am!) a
            graphic designer. I have interests in{' '}
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
            {row1
              ? row1.map((icon) => (
                  <img
                    src={`/graphic-design/adobe-icons/${icon.url}`}
                    alt=''
                    style={{
                      boxShadow: icon.name
                        ? `0px 0px 40px 0px rgba(${icon.boxShadow})`
                        : 'none',
                    }}
                    key={icon.id}
                  />
                ))
              : null}
          </div>

          <div className='icon-row-2'>
            {row1
              ? row2.map((icon) => (
                  <img
                    src={`/graphic-design/adobe-icons/${icon.url}`}
                    alt=''
                    style={{
                      boxShadow: icon.name
                        ? `0px 0px 40px 0px rgba(${icon.boxShadow})`
                        : 'none',
                    }}
                    key={icon.id}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignDesc;
