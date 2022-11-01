import React from 'react';
import { GithubIcon } from '../general/Icons';
import '../../css/web-projects/Project.css';

function Weather() {
  return (
    <div className='project-name'>
      <div className='project-banner'>
        <img
          srcSet='/web-projects/web-projects-small/weather_s.png 500w, /web-projects/weather.png 1500w'
          sizes='(max-width: 500px) 500px, 1500px'
          src='/web-projects/weather.png'
          alt=''
        />
      </div>
      <div className='project-info'>
        <div className='project-header'>
          <p>
            <a
              href={'https://weather-sc.onrender.com'}
              target='_blank'
              rel='noreferrer'
            >
              weather - s.c.
            </a>
          </p>
          <GithubIcon link='https://github.com/s-arina/Weather_App_V2' />
        </div>
        <div className='project-body'>
          <div className='project-details-container'>
            <div className='project-details'>
              <ul className='tech-stack'>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Geolocation API</li>
                <li>OpenWeatherAPI</li>
              </ul>
            </div>
            <div className='project-desc'>
              <p>A weather app created using WeatherAPI.</p>
              <br />
              <p>
                After granting location access, users can tab through three
                pages to check the current and future forecast, information
                about UV index, sunrise, and sunset, and information about the
                moon phase, moonrise, and moonset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
