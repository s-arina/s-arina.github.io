import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function ZODIAC({
  setDesignModalZODIAC,
  setDesignModalLOUVRE,
  setDesignModalUI,
}) {
  const imgs = [
    { id: 1, name: '/graphic-design/zodiac/zodiac-1.png' },
    { id: 2, name: '/graphic-design/zodiac/zodiac-2.png' },
    { id: 3, name: '/graphic-design/zodiac/zodiac-3.png' },
    { id: 4, name: '/graphic-design/zodiac/zodiac-4.png' },
    { id: 5, name: '/graphic-design/zodiac/zodiac-5.png' },
  ];

  return (
    <div className='modal-container'>
      <div
        className='close-container'
        onClick={() => setDesignModalZODIAC(false)}
      >
        <div className='leftright'></div>
        <div className='rightleft'></div>
      </div>
      <div className='prev-proj'>
        <span
          className='chevron left'
          onClick={() => {
            setDesignModalZODIAC(false);
            setDesignModalLOUVRE(true);
          }}
        ></span>
      </div>
      <div className='next-proj'>
        <span
          className='chevron right'
          onClick={() => {
            setDesignModalZODIAC(false);
            setDesignModalUI(true);
          }}
        ></span>
      </div>
      <div className='design-info'>
        <h1>ZODIAC</h1>
        <p>
          Inspired by my love for the stars.
          <br />A zine about the twelve zodiac signs and some general facts
          about them.
        </p>
        {imgs
          ? imgs.map((img) => (
              <div className='zodiac-imgs' key={img.id}>
                <img id={img.id} src={img.name} alt='' />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ZODIAC;
