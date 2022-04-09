import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function UIDesign({ setDesignModal }) {
  return (
    <div className='design-modal' onClick={() => setDesignModal(false)}>
      <div className='modal-container'>
        <button onClick={() => setDesignModal(false)}>CLOSE</button>
        <h1>UI REDESIGN CHALLENGE</h1>
      </div>
    </div>
  );
}

export default UIDesign;
