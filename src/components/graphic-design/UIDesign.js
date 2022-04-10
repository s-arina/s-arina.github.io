import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function UIDesign({ setDesignModal }) {
  return (
    <div className='design-modal' onClick={() => setDesignModal(false)}>
      <div className='modal-container'>
        <div className='design-info'>
          <div className='close-button'>
            <button onClick={() => setDesignModal(false)}>X</button>
          </div>
          <h1>UI REDESIGN CHALLENGE</h1>
          <h2>Adobe XD / Adobe Illustrator / Adobe Procreate</h2>
          <p>
            A personal project where I challenged myself to resdesign the UI of
            some of my most used or favorite apps. It was a way for me to
            quickly explore different directions with design without spending
            too much time on one!
          </p>
          <div className='ui-redesign-imgs'>
            <img src='/graphic-design/ui-redesign/ui-1.png' alt='' />
            <img src='/graphic-design/ui-redesign/ui-2.png' alt='' />
            <img src='/graphic-design/ui-redesign/ui-3.png' alt='' />
            <img src='/graphic-design/ui-redesign/ui-4.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UIDesign;
