import React from 'react';
import '../../css/graphic-design/Designs.css';

function Designs(props) {
  return (
    <div className='designs-container'>
      <div className='design-thumbnails'>
        <ul>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/graphic-design/thumbnails/UI-CHALLENGE.png')`,
              }}
            ></div>
            {/* <div className='hover-content'></div> */}
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/graphic-design/thumbnails/PTP.png')`,
              }}
            ></div>
            {/* <div className='hover-content'></div> */}
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/graphic-design/thumbnails/UBF.png')`,
              }}
            ></div>
            {/* <div className='hover-content'></div> */}
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/graphic-design/thumbnails/SB.png')`,
              }}
            ></div>
            {/* <div className='hover-content'></div> */}
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/graphic-design/thumbnails/LOUVRE.png')`,
              }}
            ></div>
            {/* <div className='hover-content'></div> */}
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/graphic-design/thumbnails/ZODIAC.png')`,
              }}
            ></div>
            {/* <div className='hover-content'></div> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Designs;
