import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function UIDesign({
  setDesignModalUI,
  setDesignModalPTP,
  setDesignModalZODIAC,
}) {
  const imgs = [
    { id: 1, name: '/graphic-design/ui-redesign/ui-1.png' },
    { id: 2, name: '/graphic-design/ui-redesign/ui-2.png' },
    { id: 3, name: '/graphic-design/ui-redesign/ui-3.png' },
    { id: 4, name: '/graphic-design/ui-redesign/ui-4.png' },
  ];

  return (
    <div className='modal-container'>
      <div className='close-container' onClick={() => setDesignModalUI(false)}>
        <div className='leftright'></div>
        <div className='rightleft'></div>
      </div>
      <div className='prev-proj'>
        <span
          className='chevron left'
          onClick={() => {
            setDesignModalUI(false);
            setDesignModalZODIAC(true);
          }}
        ></span>
      </div>
      <div className='next-proj'>
        <span
          className='chevron right'
          onClick={() => {
            setDesignModalUI(false);
            setDesignModalPTP(true);
          }}
        ></span>
      </div>
      <div className='design-info'>
        <h1>UI Redesign Challenge</h1>
        <p>
          A personal project where I challenged myself to resdesign the UI of
          some of my most used or favorite apps. <br />
          It was a way for me to quickly explore different directions with
          design without spending too much time on one.
        </p>
        {imgs
          ? imgs.map((img) => (
              <div className='ui-redesign-imgs' key={img.id}>
                <img id={img.id} src={img.name} alt='' />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default UIDesign;
