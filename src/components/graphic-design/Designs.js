import React, { useState, useEffect } from 'react';
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
      url: 'UI-CHALLENGE',
      fn: setDesignModalUI,
      title: 'UI Redesign Challenge',
    },
    {
      id: 2,
      url: 'PTP',
      fn: setDesignModalPTP,
      title: 'Paid to Proofread',
    },
    {
      id: 3,
      url: 'UBF',
      fn: setDesignModalUBF,
      title: 'Urban Body Fix',
    },
    {
      id: 4,
      url: 'SB',
      fn: setDesignModalSB,
      title: 'Starbucks Redesign',
    },
    {
      id: 5,
      url: 'LOUVRE',
      fn: setDesignModalLOUVRE,
      title: 'LOUVRE',
    },
    {
      id: 6,
      url: 'ZODIAC',
      fn: setDesignModalZODIAC,
      title: 'ZODIAC',
    },
  ];

  function closeModal(e) {
    if (e.target.id === 'bg') {
      setDesignModalUI(false);
      setDesignModalPTP(false);
      setDesignModalUBF(false);
      setDesignModalSB(false);
      setDesignModalLOUVRE(false);
      setDesignModalZODIAC(false);
    }
  }

  useEffect(() => {
    const content = document.getElementsByClassName('content')[0];
    if (
      (designModalUI,
      designModalPTP,
      designModalUBF,
      designModalSB,
      designModalLOUVRE,
      designModalZODIAC)
    ) {
      // content.style.overflow = 'hidden';
    } else {
      // content.style.overflow = 'visible';
    }
  }, [
    designModalUI,
    designModalPTP,
    designModalUBF,
    designModalSB,
    designModalLOUVRE,
    designModalZODIAC,
  ]);

  return (
    <div className='designs-container'>
      <div
        className={`design-modal ${
          designModalUI ? 'design-modal-visible' : 'design-modal-invisible'
        }`}
        onClick={closeModal}
        id='bg'
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
        onClick={closeModal}
        id='bg'
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
        onClick={closeModal}
        id='bg'
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
        onClick={closeModal}
        id='bg'
      >
        <SB setDesignModalSB={setDesignModalSB} designModalSB={designModalSB} />
      </div>
      <div
        className={`design-modal ${
          designModalLOUVRE ? 'design-modal-visible' : 'design-modal-invisible'
        }`}
        onClick={closeModal}
        id='bg'
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
        onClick={closeModal}
        id='bg'
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
                      backgroundImage: `url(/graphic-design/thumbnails/${img.url}.png)`,
                    }}
                  ></div>
                  <div
                    className='thumbnail-hover'
                    onClick={() => {
                      img.fn(true);
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
