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

  const imgs = [
    {
      id: 1,
      url: '/graphic-design/thumbnails/UI-CHALLENGE.png',
      abv: setDesignModalUI,
      title: 'UI Redesign Challenge',
    },
    {
      id: 2,
      url: '/graphic-design/thumbnails/PTP.png',
      abv: setDesignModalPTP,
      title: 'Paid to Proofread',
    },
    {
      id: 3,
      url: '/graphic-design/thumbnails/UBF.png',
      abv: setDesignModalUI,
      title: 'Urban Body Fix',
    },
    {
      id: 4,
      url: '/graphic-design/thumbnails/SB.png',
      abv: setDesignModalSB,
      title: 'Starbucks Redesign',
    },
    {
      id: 5,
      url: '/graphic-design/thumbnails/LOUVRE.png',
      abv: setDesignModalLOUVRE,
      title: 'LOUVRE',
    },
    {
      id: 6,
      url: '/graphic-design/thumbnails/ZODIAC.png',
      abv: setDesignModalZODIAC,
      title: 'ZODIAC',
    },
  ];

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
          {imgs
            ? imgs.map((img) => (
                <li key={img.id}>
                  <div
                    className='thumbnail'
                    style={{
                      backgroundImage: `url(${img.url})`,
                    }}
                  ></div>
                  <div
                    className='thumbnail-hover'
                    onClick={() => {
                      img.abv(true);
                    }}
                  >
                    <p>{img.title}</p>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default Designs;
