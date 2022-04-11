import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function SB({ setDesignModalSB }) {
  return (
    <div className='modal-container'>
      <div className='design-info'>
        <div className='close-container'>
          <div
            className='leftright'
            onClick={() => setDesignModalSB(false)}
          ></div>
          <div
            className='rightleft'
            onClick={() => setDesignModalSB(false)}
          ></div>
        </div>
        <h1>Starbucks Redesign</h1>
        <h2>Adobe XD / Adobe Photoshop</h2>
        <p>
          A redesign of the UI on Starbucks' website and mobile app. Seasonal
          colors were incorporated into the design to make the website more
          colorful and fun, while still keeping its minimalistic aesthetic.
        </p>
        <div className='sb-imgs'>
          <div className='sb-row-1'>
            <img src='/graphic-design/sb/sb-1.gif' alt='' />
            <img src='/graphic-design/sb/sb-2.gif' alt='' />
          </div>
          <div className='sb-row-2'>
            <img src='/graphic-design/sb/sb-3.gif' alt='' />
            <img src='/graphic-design/sb/sb-5.gif' alt='' />
          </div>
          <div className='sb-row-3'>
            <img src='/graphic-design/sb/sb-6.gif' alt='' />
            <img src='/graphic-design/sb/sb-4.gif' alt='' />
          </div>
          <div className='sb-row-4'>
            <img src='/graphic-design/sb/sb-7.gif' alt='' />
            <img src='/graphic-design/sb/sb-8.gif' alt='' />
          </div>
          <img src='/graphic-design/sb/sb-9.png' alt='' />
        </div>
      </div>
    </div>
  );
}

export default SB;
