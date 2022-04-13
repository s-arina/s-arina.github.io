import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function LOUVRE({ setDesignModalLOUVRE }) {
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
        <h2>Adobe InDesign</h2>
        <p>
          A mini zine and guide to some of the Louvre’s most famous sights and
          works of art.
        </p>
        <div className='louvre-imgs'>
          <img src='/website/graphic-design/louvre/louvre-1.png' alt='' />
          <img src='/website/graphic-design/louvre/louvre-2.png' alt='' />
          <img src='/website/graphic-design/louvre/louvre-3.png' alt='' />
          <img src='/website/graphic-design/louvre/louvre-4.png' alt='' />
          <img src='/website/graphic-design/louvre/louvre-5.png' alt='' />
        </div>
      </div>
    </div>
  );
}

export default LOUVRE;
