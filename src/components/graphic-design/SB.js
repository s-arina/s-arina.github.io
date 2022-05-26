import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function SB({ setDesignModalSB, setDesignModalUBF, setDesignModalLOUVRE }) {
  const imgs = [
    { id: 1, name: '/graphic-design/sb/sb-1.gif' },
    { id: 2, name: '/graphic-design/sb/sb-2.gif' },
    { id: 3, name: '/graphic-design/sb/sb-3.gif' },
    { id: 4, name: '/graphic-design/sb/sb-5.gif' },
    { id: 5, name: '/graphic-design/sb/sb-6.gif' },
    { id: 6, name: '/graphic-design/sb/sb-4.gif' },
    { id: 7, name: '/graphic-design/sb/sb-7.gif' },
    { id: 8, name: '/graphic-design/sb/sb-8.gif' },
    { id: 9, name: '/graphic-design/sb/sb-9.gif' },
  ];

  return (
    <div className='modal-container'>
      <div className='close-container' onClick={() => setDesignModalSB(false)}>
        <div className='leftright'></div>
        <div className='rightleft'></div>
      </div>
      <div className='prev-proj'>
        <span
          className='chevron left'
          onClick={() => {
            setDesignModalSB(false);
            setDesignModalUBF(true);
          }}
        ></span>
      </div>
      <div className='next-proj'>
        <span
          className='chevron right'
          onClick={() => {
            setDesignModalSB(false);
            setDesignModalLOUVRE(true);
          }}
        ></span>
      </div>
      <div className='design-info'>
        <h1>Starbucks Redesign</h1>
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
