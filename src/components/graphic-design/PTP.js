import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function PTP({ setDesignModalPTP, setDesignModalUBF, setDesignModalUI }) {
  const imgs = [
    { id: 1, name: '/graphic-design/ptp/ptp-1.gif' },
    { id: 2, name: '/graphic-design/ptp/ptp-2.gif' },
    { id: 3, name: '/graphic-design/ptp/ptp-3.png' },
  ];

  return (
    <div className='modal-container'>
      <div className='design-info'>
        <div className='close-container'>
          <div
            className='leftright'
            onClick={() => setDesignModalPTP(false)}
          ></div>
          <div
            className='rightleft'
            onClick={() => setDesignModalPTP(false)}
          ></div>
        </div>
        <div className='prev-proj'>
          <span
            className='chevron left'
            onClick={() => {
              setDesignModalPTP(false);
              setDesignModalUI(true);
            }}
          ></span>
        </div>
        <div className='next-proj'>
          <span
            className='chevron right'
            onClick={() => {
              setDesignModalPTP(false);
              setDesignModalUBF(true);
            }}
          ></span>
        </div>
        <h1>Paid to Proofread</h1>
        <p>
          Book and Kindle redesign and update for Tony Award winning theatre
          producer Sue Gilad’s book,{' '}
          <a
            href={'https://paidtoproofread.com/shop/'}
            target='_blank'
            rel='noreferrer'
            style={{ color: 'orange' }}
          >
            Paid to Proofread
          </a>
          .
          <br />
          Updated and given a more fun and modern look after 20 years of being a
          black and white Microsoft Word document.
        </p>
        <div className='ptp-imgs'>
          <div className='ptp-gifs'>
            <img src='/graphic-design/ptp/ptp-1.gif' alt='' />
            <img src='/graphic-design/ptp/ptp-2.gif' alt='' />
          </div>
          <img src='/graphic-design/ptp/ptp-3.png' alt='' />
        </div>
      </div>
    </div>
  );
}

export default PTP;
