import React, { useState, useEffect } from 'react';
import './css/Nav.css';

function Nav() {
  const spanStyle = { color: 'red' };
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className='nav_content'>
        <a href='app'>
          <img className='nav_logo' src='/logo.png' alt='' />
        </a>
        <div className='nav_links'>
          <a href='#about'>
            <p>
              <span style={spanStyle}>01.</span> Projects
            </p>
          </a>
          <p>
            <span style={spanStyle}>02.</span> Graphic Design
          </p>
          <p>
            <span style={spanStyle}>03.</span> Illustration
          </p>
          <p>
            <span style={spanStyle}>04.</span> About
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
