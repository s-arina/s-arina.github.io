import React from 'react';
import '../../css/illustration/Illustration.css';

function Illustration({ imgs }) {
  return (
    <div className='illustrations'>
      {imgs.map((img) => (
        <div className='thumbnail' key={img.id}>
          <img id={img.id} src={`/illustration/${img.name}.png`} alt='' />
        </div>
      ))}
    </div>
  );
}

export default Illustration;
