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

  const [mobileView, setMobileView] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    if (width < 500) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, [width]);

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

  // disable scrolling when modal open
  useEffect(() => {
    if (
      designModalUI ||
      designModalPTP ||
      designModalUBF ||
      designModalSB ||
      designModalLOUVRE ||
      designModalZODIAC
    ) {
      document.body.style.overflow = 'hidden';
      document.body.style.padding = '0 5px 0 0';
    } else {
      document.body.style.overflow = 'visible';
      document.body.style.padding = '0';
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
        className={designModalUI ? 'design-modal' : 'design-modal-invisible'}
        onClick={closeModal}
        id='bg'
      >
        <UIDesign
          setDesignModalUI={setDesignModalUI}
          setDesignModalPTP={setDesignModalPTP}
          setDesignModalZODIAC={setDesignModalZODIAC}
        />
      </div>
      <div
        className={designModalPTP ? 'design-modal' : 'design-modal-invisible'}
        onClick={closeModal}
        id='bg'
      >
        <PTP
          setDesignModalPTP={setDesignModalPTP}
          setDesignModalUI={setDesignModalUI}
          setDesignModalUBF={setDesignModalUBF}
        />
      </div>
      <div
        className={designModalUBF ? 'design-modal' : 'design-modal-invisible'}
        onClick={closeModal}
        id='bg'
      >
        <UBF
          setDesignModalUBF={setDesignModalUBF}
          setDesignModalPTP={setDesignModalPTP}
          setDesignModalSB={setDesignModalSB}
        />
      </div>
      <div
        className={designModalSB ? 'design-modal' : 'design-modal-invisible'}
        onClick={closeModal}
        id='bg'
      >
        <SB
          setDesignModalSB={setDesignModalSB}
          setDesignModalUBF={setDesignModalUBF}
          setDesignModalLOUVRE={setDesignModalLOUVRE}
        />
      </div>
      <div
        className={
          designModalLOUVRE ? 'design-modal' : 'design-modal-invisible'
        }
        onClick={closeModal}
        id='bg'
      >
        <LOUVRE
          setDesignModalLOUVRE={setDesignModalLOUVRE}
          setDesignModalSB={setDesignModalSB}
          setDesignModalZODIAC={setDesignModalZODIAC}
        />
      </div>
      <div
        className={
          designModalZODIAC ? 'design-modal' : 'design-modal-invisible'
        }
        onClick={closeModal}
        id='bg'
      >
        <ZODIAC
          setDesignModalZODIAC={setDesignModalZODIAC}
          setDesignModalLOUVRE={setDesignModalLOUVRE}
          setDesignModalUI={setDesignModalUI}
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
                      backgroundImage: mobileView
                        ? `url(/graphic-design/thumbnails-mobile/${img.url}_mobile.png)`
                        : `url(/graphic-design/thumbnails/${img.url}.png)`,
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
