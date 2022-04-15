import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function LOUVRE({ setDesignModalLOUVRE }) {
  const imgs = [
    { id: 1, name: '/graphic-design/louvre/louvre-1.png' },
    { id: 2, name: '/graphic-design/louvre/louvre-2.png' },
    { id: 3, name: '/graphic-design/louvre/louvre-3.png' },
    { id: 4, name: '/graphic-design/louvre/louvre-4.png' },
    { id: 5, name: '/graphic-design/louvre/louvre-5.png' },
  ];

  return (
    <div className='modal-container'>
      <div className='design-info'>
        <div className='close-container'>
          <div
            className='leftright'
            onClick={() => setDesignModalLOUVRE(false)}
          ></div>
          <div
            className='rightleft'
            onClick={() => setDesignModalLOUVRE(false)}
          ></div>
        </div>
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
