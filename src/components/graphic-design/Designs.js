import React, { useState } from 'react';
import '../../css/graphic-design/Designs.css';
import UIDesign from './UIDesign';

function Designs() {
  const [designModal, setDesignModal] = useState(false);
  return (
    <div className='designs-container'>
      {designModal ? <UIDesign setDesignModal={setDesignModal} /> : null}
      <div className='design-thumbnails'>
        <ul>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/graphic-design/thumbnails/UI-CHALLENGE.png')`,
              }}
            ></div>
            <div
              className='thumbnail-hover'
              onClick={() => setDesignModal(true)}
            >
              <p>UI Redesign Challenge</p>
            </div>
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/graphic-design/thumbnails/PTP.png')`,
              }}
            ></div>
            <div className='thumbnail-hover'>
              <p>Paid to Proofread</p>
            </div>
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/graphic-design/thumbnails/UBF.png')`,
              }}
            ></div>
            <div className='thumbnail-hover'>
              <p>Urban Body Fix</p>
            </div>
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/graphic-design/thumbnails/SB.png')`,
              }}
            ></div>
            <div className='thumbnail-hover'>
              <p>Starbucks Redesign</p>
            </div>
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/graphic-design/thumbnails/LOUVRE.png')`,
              }}
            ></div>
            <div className='thumbnail-hover'>
              <p>LOUVRE</p>
            </div>
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/graphic-design/thumbnails/ZODIAC.png')`,
              }}
            ></div>
            <div className='thumbnail-hover'>
              <p>ZODIAC</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Designs;
