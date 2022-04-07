import './css/App.css';
import About from './About.js';
import Nav from './Nav.js';

function App() {
  return (
    <div className='app'>
      <Nav />
      <div className='banner'>
        <div className='container'>
          <div className='logo'>
            <img src='/logo.gif' alt='' />
          </div>
          <div className='intro'>
            <h1>Hi,</h1>
            <h1> I'm Sarina.</h1>
            <h2>Web Developer / Graphic Designer / Illustrator</h2>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
}

export default App;
