import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function PTP({ setDesignModalPTP }) {
  return (
    <div className='design-modal' onClick={() => setDesignModalPTP(false)}>
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
          <h1>Paid to Proofread</h1>
          <h2>Adobe InDesign</h2>
          <p>
            Book and Kindle redesign and update for Tony Award winning theatre
            producer <br />
            Sue Gilad’s book,{' '}
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
            <br />
            Updated and given a more fun and modern look after 20 years of being
            a black and white Microsoft Word document! I redesigned every page
            as well as a new cover.
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
    </div>
  );
}

export default PTP;
