import React from 'react';
import GitStatus from './GitStatus';
import '../../css/web-projects/Projects.css';

function Projects() {
  return (
    <div className='projects-scroller'>
      <GitStatus />
      <GitStatus />
      <GitStatus />
    </div>
  );
}

export default Projects;
