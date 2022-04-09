import React from 'react';
import '../../css/web-projects/Projects.css';
import GitStatus from './GitStatus';
import IHopie from './IHopie';
import SpotTheDiff from './SpotTheDiff';

function Projects() {
  return (
    <div className='projects-scroller'>
      <div className='projects-arrow-wrapper'>
        <i className='arrow right'></i>
        <i className='arrow right'></i>
      </div>
      <div className='projects-container'>
        <GitStatus />
        <IHopie />
        <SpotTheDiff />
      </div>
    </div>
  );
}

export default Projects;
