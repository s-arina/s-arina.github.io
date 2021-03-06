import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function LOUVRE({
  setDesignModalLOUVRE,
  setDesignModalSB,
  setDesignModalZODIAC,
}) {
  const imgs = [
    { id: 1, name: '/graphic-design/louvre/louvre-1.png' },
    { id: 2, name: '/graphic-design/louvre/louvre-2.png' },
    { id: 3, name: '/graphic-design/louvre/louvre-3.png' },
    { id: 4, name: '/graphic-design/louvre/louvre-4.png' },
    { id: 5, name: '/graphic-design/louvre/louvre-5.png' },
  ];

  return (
    <div className='modal-container'>
      <div
        className='close-container'
        onClick={() => setDesignModalLOUVRE(false)}
      >
        <div className='leftright'></div>
        <div className='rightleft'></div>
      </div>
      <div className='prev-proj'>
        <span
          className='chevron left'
          onClick={() => {
            setDesignModalLOUVRE(false);
            setDesignModalSB(true);
          }}
        ></span>
      </div>
      <div className='next-proj'>
        <span
          className='chevron right'
          onClick={() => {
            setDesignModalLOUVRE(false);
            setDesignModalZODIAC(true);
          }}
        ></span>
      </div>
      <div className='design-info'>
        <h1>LOUVRE</h1>
        <p>
          A mini zine and guide to some of the Louvre’s most famous sights and
          works of art.
        </p>
        {imgs
          ? imgs.map((img) => (
              <div className='louvre-imgs' key={img.id}>
                <img id={img.id} src={img.name} alt='' />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default LOUVRE;
