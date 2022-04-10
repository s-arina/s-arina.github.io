import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function ZODIAC({ setDesignModalZODIAC }) {
  return (
    <div className='design-modal' onClick={() => setDesignModalZODIAC(false)}>
      <div className='modal-container'>
        <div className='design-info'>
          <div className='close-container'>
            <div
              className='leftright'
              onClick={() => setDesignModalZODIAC(false)}
            ></div>
            <div
              className='rightleft'
              onClick={() => setDesignModalZODIAC(false)}
            ></div>
          </div>
          <h1>ZODIAC</h1>
          <h2>Adobe InDesign</h2>
          <p>
            Inspired by my love for the stars.
            <br />A zine about the twelve zodiac signs and some general facts
            about them.
          </p>
          <div className='zodiac-imgs'>
            <img src='/graphic-design/zodiac/zodiac-1.png' alt='' />
            <img src='/graphic-design/zodiac/zodiac-2.png' alt='' />
            <img src='/graphic-design/zodiac/zodiac-3.png' alt='' />
            <img src='/graphic-design/zodiac/zodiac-4.png' alt='' />
            <img src='/graphic-design/zodiac/zodiac-5.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZODIAC;
