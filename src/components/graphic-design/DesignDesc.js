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
      url: 'InDesign',
      name: ind,
      boxShadow: '255, 48, 102, 0.8',
    },
    {
      id: 2,
      url: 'Photoshop',
      name: ps,
      boxShadow: '48, 168, 255, 0.8',
    },
    {
      id: 3,
      url: 'Illustrator',
      name: ai,
      boxShadow: '255, 48, 102, 0.8',
    },
  ];

  const row2 = [
    {
      id: 1,
      url: 'XD',
      name: xd,
      boxShadow: '255, 97, 247, 0.8',
    },
    {
      id: 2,
      url: 'PremierePro',
      name: pp,
      boxShadow: '153, 153, 255, 0.8',
    },
    {
      id: 3,
      url: 'AfterEffects',
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
            {row1?.map((icon) => (
              <img
                srcSet={`/graphic-design/adobe-icons/${icon.url}_s.png 60w,
                  /graphic-design/adobe-icons/${icon.url}.png 200w`}
                sizes='(max-width: 500px) 60px, 200px'
                src={`/graphic-design/adobe-icons/${icon.url}.png`}
                alt=''
                style={{
                  boxShadow: icon.name
                    ? `0px 0px 40px 0px rgba(${icon.boxShadow})`
                    : 'none',
                }}
                key={icon.id}
              />
            ))}
          </div>

          <div className='icon-row-2'>
            {row2?.map((icon) => (
              <img
                srcSet={`/graphic-design/adobe-icons/${icon.url}_s.png 60w,
                      /graphic-design/adobe-icons/${icon.url}.png 200w`}
                sizes='(max-width: 500px) 60px, 200px'
                src={`/graphic-design/adobe-icons/${icon.url}.png`}
                alt=''
                style={{
                  boxShadow: icon.name
                    ? `0px 0px 40px 0px rgba(${icon.boxShadow})`
                    : 'none',
                }}
                key={icon.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignDesc;
