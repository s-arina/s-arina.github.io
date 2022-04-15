import React from 'react';
import '../../css/illustration/Illustration.css';

function Illustration() {
  const imgs = [
    { id: 1, name: '/illustration/catfe.png' },
    { id: 2, name: '/illustration/study5.png' },
    { id: 3, name: '/illustration/study.png' },
    { id: 4, name: '/illustration/aqua4.png' },
    { id: 5, name: '/illustration/companion.png' },
    { id: 6, name: '/illustration/untitled.png' },
    { id: 7, name: '/illustration/stargazing.png' },
    { id: 8, name: '/illustration/santamonica.png' },
    { id: 9, name: '/illustration/ub.png' },
  ];

  return (
    <div className='illustrations'>
      {imgs
        ? imgs.map((img) => (
            <div className='thumbnail' key={img.id}>
              <img id={img.id} src={img.name} alt='' />
            </div>
          ))
        : null}
    </div>
  );
}

export default Illustration;
