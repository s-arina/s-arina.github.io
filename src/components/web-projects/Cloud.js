import React, { useState, useEffect } from 'react';

function Cloud() {
  const [tc, setTc] = useState({});

  useEffect(() => {
    const tc = TagCloud(container, myTags, options);
    setTc(tc);
  }, []);

  const TagCloud = require('TagCloud');
  const container = '.tagcloud';
  const myTags = [
    'JavaScript',
    'CSS',
    'HTML',
    'Node.js',
    'React',
    'Redux',
    'Express',
    'Firebase',
    'Sequelize',
    'PostgreSQL',
    'git',
    'GitHub',
  ];

  const options = {
    radius: 250,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: false,
  };

  return <div className='tagcloud'></div>;
}

export default Cloud;
