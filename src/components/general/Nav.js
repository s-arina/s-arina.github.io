import React, { useState, useEffect } from 'react';
import '../../css/general/Nav.css';

function Nav() {
  const [show, setHandleShow] = useState(true);
  const [hamMenu, setHamMenu] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [hamIconOpen, setHamIconOpen] = useState(false);

  var currPos = window.scrollY;

  function navScroll() {
    if (window.scrollY < currPos) {
      // scrolling up shows the nav
      setHandleShow(true);
    } else {
      // scrolling down hides the nav
      setHandleShow(false);
    }
    currPos = window.scrollY;
  }

  // const scrollTop = () => {
  //   window.scroll({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  // listen for window width change to hide menu when resizing
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  }, []);

  useEffect(() => {
    if (width > 770) {
      setHamMenu(false);
      setHamIconOpen(false);
    }
  }, [width]);

  // disable scrolling when ham menu is open / blur overlay
  useEffect(() => {
    const content = document.getElementsByClassName('content')[0];
    if (hamMenu) {
      document.removeEventListener('scroll', navScroll);
      content.style.filter = 'blur(4px)';
      content.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.padding = '0 5px 0 0';
    } else {
      document.addEventListener('scroll', navScroll);
      content.style.filter = 'none';
      content.style.overflow = 'visible';
      document.body.style.overflow = 'visible';
      document.body.style.padding = '0';
    }
  }, [hamMenu]);

  return (
    <div className={`nav ${!show && 'show'}`}>
      <div className='nav-content'>
        <a href='/'>
          <img
            className='nav-logo'
            src='/imgs/logo.png'
            alt=''
            onClick={() => {
              setHamMenu(false);
              setHamIconOpen(false);
            }}
          />
        </a>
        <div className='nav-links'>
          <a href='#projects'>
            <p>Projects</p>
          </a>
          <a href='#design'>
            <p>Graphic Design</p>
          </a>
          <a href='#illustration'>
            <p>Illustration</p>
          </a>
          <a href='#contact'>
            <p>Contact</p>
          </a>
          <div
            className='ham-icon-wrapper'
            onClick={() => {
              setHamMenu(!hamMenu);
              setHamIconOpen(!hamIconOpen);
            }}
          >
            <div className={`ham-icon${hamIconOpen ? '-open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div
          className={`overlay${hamMenu ? '-visible' : ''}`}
          onClick={() => {
            setHamMenu(false);
            setHamIconOpen(false);
          }}
        ></div>
        <div className={`ham-menu${hamMenu ? '-visible' : ''}`}>
          <div className='ham-links'>
            <a
              href='#projects'
              onClick={() => {
                setHamMenu(false);
                setHamIconOpen(false);
              }}
            >
              <p>Projects</p>
            </a>
            <hr />
            <a
              href='#design'
              onClick={() => {
                setHamMenu(false);
                setHamIconOpen(false);
              }}
            >
              <p>Graphic Design</p>
            </a>
            <hr />

            <a
              href='#illustration'
              onClick={() => {
                setHamMenu(false);
                setHamIconOpen(false);
              }}
            >
              <p>Illustration</p>
            </a>
            <hr />

            <a
              href='#contact'
              onClick={() => {
                setHamMenu(false);
                setHamIconOpen(false);
              }}
            >
              <p>Contact</p>
            </a>
            <div className='ham-menu-social'>
              <a
                href={'https://github.com/s-arina'}
                target='_blank'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  role='img'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='red'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-github'
                >
                  <title>GitHub</title>
                  <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                </svg>
              </a>{' '}
              <a
                href={'https://linkedin.com/in/sarinachang'}
                target='_blank'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  role='img'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='red'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-linkedin'
                >
                  <title>LinkedIn</title>
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                  <rect x='2' y='9' width='4' height='12'></rect>
                  <circle cx='4' cy='4' r='2'></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
