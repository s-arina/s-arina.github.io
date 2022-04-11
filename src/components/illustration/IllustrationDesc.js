import React from 'react';
import '../../css/illustration/IllustrationDesc.css';
import Illustration from './Illustration';

function IllustrationDesc(props) {
  return (
    <div id='illustration'>
      <div className='illustration-desc'>
        <div className='illustration-title-desc'>
          <h1>Illustration.</h1>
          <p>
            I'm also an illustrator and have been drawing since I could hold a
            pencil. I love making landscapes and fanart inspired from my
            favorite movies or games.
            <br />
            <br />
            I've gone from drawing in MS Paint with a mouse, to Paint Tool SAI
            with my first tablet, and now I primarily work with Adobe Procreate
            and Photoshop.
          </p>
        </div>
        <Illustration />
      </div>
    </div>
  );
}

export default IllustrationDesc;
