import React from 'react';
import '../../css/web-projects/Projects.css';
import GitStatus from './GitStatus';
import IHopie from './IHopie';
import SpotTheDiff from './SpotTheDiff';
import OpenAI from './OpenAI';

function Projects() {
  return (
    <div className='projects-scroller'>
      <div className='projects-container'>
        <GitStatus />
        <OpenAI />
        <IHopie />
        <SpotTheDiff />
      </div>
    </div>
  );
}

export default Projects;
