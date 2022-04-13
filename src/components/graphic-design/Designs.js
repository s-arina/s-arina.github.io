import React, { useState } from 'react';
import '../../css/graphic-design/Designs.css';
import '../../css/graphic-design/DesignModal.css';
import UIDesign from './UIDesign';
import PTP from './PTP';
import UBF from './UBF';
import SB from './SB';
import LOUVRE from './LOUVRE';
import ZODIAC from './ZODIAC';

function Designs() {
  const [designModalUI, setDesignModalUI] = useState(false);
  const [designModalPTP, setDesignModalPTP] = useState(false);
  const [designModalUBF, setDesignModalUBF] = useState(false);
  const [designModalSB, setDesignModalSB] = useState(false);
  const [designModalLOUVRE, setDesignModalLOUVRE] = useState(false);
  const [designModalZODIAC, setDesignModalZODIAC] = useState(false);

  return (
    <div className='designs-container'>
      <div
        className={`design-modal ${
          designModalUI ? 'design-modal-visible' : 'design-modal-invisible'
        }`}
      >
        <UIDesign
          setDesignModalUI={setDesignModalUI}
          designModalUI={designModalUI}
        />
      </div>
      <div
        className={`design-modal ${
          designModalPTP ? 'design-modal-visible' : 'design-modal-invisible'
        }`}
      >
        <PTP
          setDesignModalPTP={setDesignModalPTP}
          designModalPTP={designModalPTP}
        />
      </div>
      <div
        className={`design-modal ${
          designModalUBF ? 'design-modal-visible' : 'design-modal-invisible'
        }`}
      >
        <UBF
          setDesignModalUBF={setDesignModalUBF}
          designModalUBF={designModalUBF}
        />
      </div>
      <div
        className={`design-modal ${
          designModalSB ? 'design-modal-visible' : 'design-modal-invisible'
        }`}
      >
        <SB setDesignModalSB={setDesignModalSB} designModalSB={designModalSB} />
      </div>
      <div
        className={`design-modal ${
          designModalLOUVRE ? 'design-modal-visible' : 'design-modal-invisible'
        }`}
      >
        <LOUVRE
          setDesignModalLOUVRE={setDesignModalLOUVRE}
          designModalLOUVRE={designModalLOUVRE}
        />
      </div>
      <div
        className={`design-modal ${
          designModalZODIAC ? 'design-modal-visible' : 'design-modal-invisible'
        }`}
      >
        <ZODIAC
          setDesignModalZODIAC={setDesignModalZODIAC}
          designModalZODIAC={designModalZODIAC}
        />
      </div>

      <div className='design-thumbnails'>
        <ul>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/website/graphic-design/thumbnails/UI-CHALLENGE.png')`,
              }}
            ></div>
            <div
              className='thumbnail-hover'
              onClick={() => setDesignModalUI(true)}
            >
              <p>UI Redesign Challenge</p>
            </div>
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/website/graphic-design/thumbnails/PTP.png')`,
              }}
            ></div>
            <div
              className='thumbnail-hover'
              onClick={() => setDesignModalPTP(true)}
            >
              <p>Paid to Proofread</p>
            </div>
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/website/graphic-design/thumbnails/UBF.png')`,
              }}
            ></div>
            <div
              className='thumbnail-hover'
              onClick={() => setDesignModalUBF(true)}
            >
              <p>Urban Body Fix</p>
            </div>
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/website/graphic-design/thumbnails/SB.png')`,
              }}
            ></div>
            <div
              className='thumbnail-hover'
              onClick={() => setDesignModalSB(true)}
            >
              <p>Starbucks Redesign</p>
            </div>
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/website/graphic-design/thumbnails/LOUVRE.png')`,
              }}
            ></div>
            <div
              className='thumbnail-hover'
              onClick={() => setDesignModalLOUVRE(true)}
            >
              <p>LOUVRE</p>
            </div>
          </li>
          <li>
            <div
              className='thumbnail'
              style={{
                backgroundImage: `url('/website/graphic-design/thumbnails/ZODIAC.png')`,
              }}
            ></div>
            <div
              className='thumbnail-hover'
              onClick={() => setDesignModalZODIAC(true)}
            >
              <p>ZODIAC</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Designs;
