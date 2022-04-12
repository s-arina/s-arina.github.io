import React, { useState, useEffect } from 'react';
import './css/Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  const [hamMenu, setHamMenu] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className='nav_content'>
        <img className='nav_logo' src='/logo.png' alt='' onClick={scrollTop} />
        <div className='nav_links'>
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
          <button className='icon' onClick={() => setHamMenu(!hamMenu)}>
            &#9776;
          </button>
          <div className={`ham-menu${hamMenu ? '-visible' : ''}`}>
            <h1>Links here</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
