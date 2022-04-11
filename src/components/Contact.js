import React from 'react';
import '../css/Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div id='contact'>
      <div className='about'>
        <img src='/self.png' alt='' />
        <h1>About me.</h1>
        <h2>NYC / Always Sleepy & Hungry / Horror Movie Fanatic</h2>
        <p>
          Currently I'm looking for a <strong>front-end</strong> or a{' '}
          <strong>full-stack</strong> developer role (junior or internship,
          too).
          <br />
          <br />
          You can get in touch with me by sending a messsage. I'd love to
          connect!
        </p>
        <div className='contact-btns'>
          <a
            href='mailto:sarinachang7@gmail.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            Email
          </a>
          <a href='/resume.pdf' rel='noopener noreferrer' target='_blank'>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
