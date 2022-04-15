import React from 'react';
import '../../css/illustration/Illustration.css';

function Illustration() {
  const imgs = [
    { id: 1, name: 'catfe' },
    { id: 2, name: 'study5' },
    { id: 3, name: 'study' },
    { id: 4, name: 'aqua4' },
    { id: 5, name: 'companion' },
    { id: 6, name: 'untitled' },
    { id: 7, name: 'stargazing' },
    { id: 8, name: 'santamonica' },
    { id: 9, name: 'ub' },
  ];

  return (
    <div className='illustrations'>
      {imgs
        ? imgs.map((img) => (
            <div className='thumbnail' key={img.id}>
              <img id={img.id} src={`/illustration/${img.name}.png`} alt='' />
            </div>
          ))
        : null}
    </div>
  );
}

export default Illustration;
