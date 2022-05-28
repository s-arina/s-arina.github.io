import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedInIcon } from './Icons';
import '../../css/general/Nav.css';
import '../../css/index.css';

function Nav() {
  const [show, setHandleShow] = useState(true);
  const [hamMenu, setHamMenu] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [hamIconOpen, setHamIconOpen] = useState(false);

  // tracking window scroll position
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

  // listen for window width change to hide menu when resizing
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  // event listener for width
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // automatically close the ham menu when screen width 770px and under
  useEffect(() => {
    if (width > 770) {
      setHamMenu(false);
      setHamIconOpen(false);
    }
  }, [width]);

  useEffect(() => {
    // wrap everything under Nav component in a div so the Nav doesn't get blurred (check App.js)
    const content = document.getElementsByClassName('content')[0];

    // when ham menu is open:
    if (hamMenu) {
      // disable scrolling when ham menu is open
      document.removeEventListener('scroll', navScroll);

      // blur the background, overflow to stop scroll
      // content.style.filter = 'blur(4px)'; // blur causing lag?
      content.style.overflow = 'hidden';

      // overflow to stop scroll, padding to fix body jumping
      document.body.style.overflow = 'hidden';
      document.body.style.padding = '0 5px 0 0';
    } else {
      // everything back to default
      document.addEventListener('scroll', navScroll);
      content.style.filter = 'none';
      content.style.overflow = 'visible';
      document.body.style.overflow = 'visible';
      document.body.style.padding = '0';
    }
  }, [hamMenu]);

  const navLinks = [
    {
      id: 1,
      sectionDiv: 'projects',
      section: 'Projects',
    },
    {
      id: 2,
      sectionDiv: 'design',
      section: 'Graphic Design',
    },
    {
      id: 3,
      sectionDiv: 'illustration',
      section: 'Illustration',
    },
    {
      id: 4,
      sectionDiv: 'contact',
      section: 'Contact',
    },
  ];

  return (
    // disappearing nav when scrolling
    <div className={`nav ${!show && 'show'}`}>
      <div className='nav-content'>
        {/* pressing logo resets ham menu */}
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
        {/* nav links */}
        <div className='nav-links'>
          {navLinks
            ? navLinks.map((link) => (
                <a href={`#${link.sectionDiv}`} key={link.id}>
                  <p>{link.section}</p>
                </a>
              ))
            : null}

          {/* toggle ham menu/icon opening and closing */}
          <div
            className='ham-icon-wrapper'
            onClick={() => {
              setHamMenu(!hamMenu);
              setHamIconOpen(!hamIconOpen);
            }}
          >
            {/* toggle ham menu/icon style changing */}
            <div className={`ham-icon${hamIconOpen ? '-open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        {/* overlay and blur on the body wrapper when ham menu open */}
        {/* hide the menu/icon when the overlay is clicked */}
        <div
          className={`overlay${hamMenu ? '-visible' : ''}`}
          onClick={() => {
            setHamMenu(false);
            setHamIconOpen(false);
          }}
        ></div>
        {/* if menu is open, show mobile links */}
        <div className={`ham-menu${hamMenu ? '-visible' : ''}`}>
          <div className='ham-links'>
            {/* when a link is clicked, hide the menu and reset the icon again */}
            {navLinks
              ? navLinks.slice(0, 3).map((link) => (
                  <>
                    <a
                      href={`#${link.sectionDiv}`}
                      onClick={() => {
                        setHamMenu(false);
                        setHamIconOpen(false);
                      }}
                      key={link.id}
                    >
                      <p>{link.section}</p>
                    </a>
                    <hr />
                  </>
                ))
              : null}
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
              <GithubIcon link='https://github.com/s-arina' /> <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
