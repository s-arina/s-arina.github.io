import './css/App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import About from './components/About';
import ProjectDesc from './components/web-projects/ProjectDesc';
import Projects from './components/web-projects/Projects';
import Design from './components/graphic-design/Design';

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
            <h2>Hi,</h2>
            <div className='type-box'>
              <div className='typed'>
                <h1> I'm Sarina.</h1>
              </div>
            </div>
            <h2>Web Developer / Graphic Designer / Illustrator</h2>
          </div>
        </div>
        <a href='#projects'>
          <div className='chevron-container'>
            <div className='chevron'></div>
            <div className='chevron'></div>
            <div className='chevron'></div>
          </div>
        </a>
      </div>
      <ProjectDesc />
      <Projects />
      <Design />
      <Footer />
    </div>
  );
}

export default App;
