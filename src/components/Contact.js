import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <div id='contact'>
      <div className='about'>
        <div className='circle'>
          <img src='/self.png' alt='' />
        </div>

        <h1>Hello!</h1>
        <h2>Nice to meet you.</h2>
        <p>
          I'm <span>Sarina</span>; a graphic designer and illustrator born and
          raised in NYC! <br />
          <br />I hold degrees in Graphic Design and Art History, and most
          recently, a certification from The Grace Hopper Program at Fullstack
          Academy.
          <br />
          <br />
          I'm currently looking for a <span>front-end</span> or a{' '}
          <span>full-stack</span> developer role. I'm open to junior or
          internship roles, too!
          <br />
          <br />
          Get in touch with me by sending a messsage. <br />
          I'd love to connect!
        </p>
        <div className='contact-btns'>
          <a
            href='mailto:sarinachang7@gmail.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            Email
          </a>
          <a href='/Resume.pdf' rel='noopener noreferrer' target='_blank'>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
