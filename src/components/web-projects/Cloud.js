import React, { useState, useEffect } from 'react';

function Cloud() {
  const [tc, setTc] = useState({});
  const [tcSM, setTcSM] = useState({});

  useEffect(() => {
    const tc = TagCloud(container, myTags, options);
    const tcSM = TagCloud(containerSM, myTags, optionsSM);
    setTc(tc);
    setTcSM(tcSM);
  }, []);

  const TagCloud = require('TagCloud');

  const container = '.tagcloud';
  const containerSM = '.tagcloud-small';

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
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: false,
  };

  const optionsSM = {
    radius: 100,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: false,
  };

  return (
    <div className='cloud'>
      <div className='tagcloud'></div>
      <div className='tagcloud-small'></div>
    </div>
  );
}

export default Cloud;
