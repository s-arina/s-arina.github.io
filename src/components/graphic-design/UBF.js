import React from 'react';
import '../../css/graphic-design/DesignModal.css';

function UBF({ setDesignModalUBF, setDesignModalPTP, setDesignModalSB }) {
  const imgs = [
    { id: 1, name: '/graphic-design/ubf/ubf-1.png' },
    { id: 2, name: '/graphic-design/ubf/ubf-2.png' },
    { id: 3, name: '/graphic-design/ubf/ubf-3.png' },
    { id: 4, name: '/graphic-design/ubf/ubf-4.png' },
    { id: 5, name: '/graphic-design/ubf/ubf-5.png' },
  ];

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
        <div className='prev-proj'>
          <span
            className='chevron left'
            onClick={() => {
              setDesignModalUBF(false);
              setDesignModalPTP(true);
            }}
          ></span>
        </div>
        <div className='next-proj'>
          <span
            className='chevron right'
            onClick={() => {
              setDesignModalUBF(false);
              setDesignModalSB(true);
            }}
          ></span>
        </div>
        <h1>Urban Body Fix</h1>
        <p>
          Book design and publishing for Nutrition Coach, Massage Therapist,
          Tony Award winning producer, and finally, author,{' '}
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
            The Urban Body Fix
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
          website.
        </p>
        {imgs
          ? imgs.map((img) => (
              <div className='ubf-imgs' key={img.id}>
                <img id={img.id} src={img.name} alt='' />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default UBF;
