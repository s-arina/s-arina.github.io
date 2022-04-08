import './css/App.css';
import About from './components/About';
import WebProjects from './components/web-projects/WebProjects';
import Nav from './Nav.js';
import Footer from './Footer.js';

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
        <div className='chevron-container'>
          <div className='chevron'></div>
          <div className='chevron'></div>
          <div className='chevron'></div>
        </div>
      </div>
      <WebProjects />
      {/* <About /> */}
      <Footer />
    </div>
  );
}

export default App;
