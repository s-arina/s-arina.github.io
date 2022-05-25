import '../../css/illustration/IllustrationDesc.css';
import Illustration from './Illustration';

function IllustrationDesc() {
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
        <Illustration imgs={imgs} />
      </div>
    </div>
  );
}

export default IllustrationDesc;
