import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function UBF({ setDesignModalUBF }) {
  return (
    <div className='modal-container'>
      <div className='design-info'>
        <div className='close-container'>
          <div
            className='leftright'
            onClick={() => setDesignModalUBF(false)}
          ></div>
          <div
            className='rightleft'
            onClick={() => setDesignModalUBF(false)}
          ></div>
        </div>
        <h1>Urban Body Fix</h1>
        <h2>Adobe InDesign</h2>
        <p>
          Book design (interior and exterior) and publishing for Nutrition
          Coach, Massage Therapist, Tony Award winning producer, and finally,
          author,{' '}
          <a
            href={'https://urbanbodyfix.com/about/'}
            target='_blank'
            rel='noreferrer'
            style={{ color: 'orange' }}
          >
            Larry Rogowsky’s{' '}
          </a>
          new book about health and wellness,{' '}
          <a
            href={
              'https://www.amazon.com/Urban-Body-Fix-Everything-Moderation/dp/B08PJKJDTR/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1607754918&sr=8-1'
            }
            target='_blank'
            rel='noreferrer'
            style={{ color: 'cyan' }}
          >
            The Urban Body Fix{' '}
          </a>
          ! Formatted for both Kindle and print. <br />
          <br />I was also given the pleasure of redesigning and updating the{' '}
          <a
            href={'https://urbanbodyfix.com/'}
            target='_blank'
            rel='noreferrer'
            style={{ color: 'cyan' }}
          >
            Urban Body Fix{' '}
          </a>
          website!
        </p>
        <div className='ubf-imgs'>
          <img src='/graphic-design/ubf/ubf-1.png' alt='' />
          <img src='/graphic-design/ubf/ubf-2.png' alt='' />
          <img src='/graphic-design/ubf/ubf-3.png' alt='' />
          <img src='/graphic-design/ubf/ubf-4.png' alt='' />
          <img src='/graphic-design/ubf/ubf-5.png' alt='' />
        </div>
      </div>
    </div>
  );
}

export default UBF;
