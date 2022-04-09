import React, { useState } from 'react';
import '../../css/graphic-design/Design.css';

function DesignDesc() {
  const [hover, setHover] = useState(false);

  var hoverText = document.querySelectorAll('.designs-title-desc span');

  for (var i = 0; i < hoverText.length; i++) {
    hoverText[i].addEventListener('mouseover', function (event) {
      setHover(true);
    });
    hoverText[i].addEventListener('mouseleave', function (event) {
      setHover(false);
    });
  }

  return (
    <div id='design'>
      <div className='designs-desc'>
        <div className='designs-title-desc'>
          <h1>Graphic Design.</h1>
          <p>
            Before I got into web development, I was (and still am!) a graphic
            designer. I have interests in{' '}
            <span className='xd'>UI/UX design</span>,{' '}
            <span className='ps'>illustration</span>,{' '}
            <span className='ind'>digital and print publication</span>, and{' '}
            <span className='il'>branding</span>
            .<br />
            <br />
            I'm proficient in <strong>Adobe Creative Cloud</strong> applications
            and also have some experience in{' '}
            <span className='pp'>video editing</span> and{' '}
            <span className='ae'>animation</span>.
          </p>
        </div>
        <div className='adobe-icons'>
          <div className='icon-row-1'>
            <img
              src='/graphic-design/adobe-icons/InDesign.png'
              alt=''
              className='ind-icon'
            />
            <img
              src='/graphic-design/adobe-icons/Photoshop.png'
              alt=''
              className='ps-icon'
            />
            <img
              src='/graphic-design/adobe-icons/Illustrator.png'
              alt=''
              className='il-icon'
            />
          </div>
          <div className='icon-row-2'>
            <img
              src='/graphic-design/adobe-icons/XD.png'
              alt=''
              className='xd-icon'
              style={{
                boxShadow: hover
                  ? '0px 0px 50px 10px rgba(255, 97, 247, 0.8)'
                  : 'none',
              }}
            />

            <img
              src='/graphic-design/adobe-icons/PremierePro.png'
              alt=''
              className='pp-icon'
            />
            <img
              src='/graphic-design/adobe-icons/AfterEffects.png'
              alt=''
              className='ae-icon'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignDesc;
