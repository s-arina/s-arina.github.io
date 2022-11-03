import React, { useState, useEffect, Suspense } from 'react';
import '../../css/graphic-design/Designs.css';
import '../../css/graphic-design/DesignModal.css';

const UIDesignLazy = React.lazy(() => import('./UIDesign'));
const PTPLazy = React.lazy(() => import('./PTP'));
const UBFLazy = React.lazy(() => import('./UBF'));
const SBLazy = React.lazy(() => import('./SB'));
const LOUVRELazy = React.lazy(() => import('./LOUVRE'));
const ZODIACLazy = React.lazy(() => import('./ZODIAC'));

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
        <Suspense fallback={<div>Loading...</div>}>
          <UIDesignLazy
            setDesignModalUI={setDesignModalUI}
            setDesignModalPTP={setDesignModalPTP}
            setDesignModalZODIAC={setDesignModalZODIAC}
          />
        </Suspense>
      </div>
      <div
        className={designModalPTP ? 'design-modal' : 'design-modal-invisible'}
        onClick={closeModal}
        id='bg'
      >
        <Suspense fallback={<div>Loading...</div>}>
          <PTPLazy
            setDesignModalPTP={setDesignModalPTP}
            setDesignModalUI={setDesignModalUI}
            setDesignModalUBF={setDesignModalUBF}
          />
        </Suspense>
      </div>
      <div
        className={designModalUBF ? 'design-modal' : 'design-modal-invisible'}
        onClick={closeModal}
        id='bg'
      >
        <Suspense fallback={<div>Loading...</div>}>
          <UBFLazy
            setDesignModalUBF={setDesignModalUBF}
            setDesignModalPTP={setDesignModalPTP}
            setDesignModalSB={setDesignModalSB}
          />
        </Suspense>
      </div>

      <div
        className={designModalSB ? 'design-modal' : 'design-modal-invisible'}
        onClick={closeModal}
        id='bg'
      >
        <Suspense fallback={<div>Loading...</div>}>
          <SBLazy
            setDesignModalSB={setDesignModalSB}
            setDesignModalUBF={setDesignModalUBF}
            setDesignModalLOUVRE={setDesignModalLOUVRE}
          />
        </Suspense>
      </div>

      <div
        className={
          designModalLOUVRE ? 'design-modal' : 'design-modal-invisible'
        }
        onClick={closeModal}
        id='bg'
      >
        <Suspense fallback={<div>Loading...</div>}>
          <LOUVRELazy
            setDesignModalLOUVRE={setDesignModalLOUVRE}
            setDesignModalSB={setDesignModalSB}
            setDesignModalZODIAC={setDesignModalZODIAC}
          />
        </Suspense>
      </div>

      <div
        className={
          designModalZODIAC ? 'design-modal' : 'design-modal-invisible'
        }
        onClick={closeModal}
        id='bg'
      >
        <Suspense fallback={<div>Loading...</div>}>
          <ZODIACLazy
            setDesignModalZODIAC={setDesignModalZODIAC}
            setDesignModalLOUVRE={setDesignModalLOUVRE}
            setDesignModalUI={setDesignModalUI}
          />
        </Suspense>
      </div>

      <div className='design-thumbnails'>
        <ul>
          {imgs
            ? imgs.map((img) => (
                <li key={img.id}>
                  <div className='thumbnail'>
                    <img
                      className='thumbnail-img'
                      srcSet={`/graphic-design/thumbnails/thumbnails-small/${img.url}_s.png 300w,
                      /graphic-design/thumbnails/${img.url}.png 1000w`}
                      sizes='(max-width: 500px) 300px, 1000px'
                      src={`/graphic-design/thumbnails/${img.url}.png`}
                      alt=''
                    />
                  </div>
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
