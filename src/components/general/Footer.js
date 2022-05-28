import React from 'react';
import { GithubIcon, LinkedInIcon } from './Icons';
import '../../css/general/Footer.css';

function Footer() {
  return (
    <footer>
      <GithubIcon link='https://github.com/s-arina' /> <LinkedInIcon />
      <hr />
    </footer>
  );
}

export default Footer;
