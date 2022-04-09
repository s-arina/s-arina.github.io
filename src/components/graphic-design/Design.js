import React from 'react';
import '../../css/graphic-design/Design.css';

function Design(props) {
  return (
    <div id='design'>
      <div className='designs-desc'>
        <div className='designs-title-desc'>
          <h1>Graphic Design.</h1>
          <p>
            Before I got into web development, I was (and still am!) a graphic
            designer. I have interests in{' '}
            <span className='uiux'>UI/UX design</span>,{' '}
            <span className='typo'>typography</span>,{' '}
            <span className='publication'>digital and print publication</span>,
            and <strong>branding</strong>.<br />
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
              className='ind'
            />
            <img
              src='/graphic-design/adobe-icons/Photoshop.png'
              alt=''
              className='ps'
            />
            <img
              src='/graphic-design/adobe-icons/Illustrator.png'
              alt=''
              className='illus'
            />
          </div>
          <div className='icon-row-2'>
            <img
              src='/graphic-design/adobe-icons/XD.png'
              alt=''
              className='xd'
            />
            <img
              src='/graphic-design/adobe-icons/PremierePro.png'
              alt=''
              className='pp'
            />
            <img
              src='/graphic-design/adobe-icons/AfterEffects.png'
              alt=''
              className='ae'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
