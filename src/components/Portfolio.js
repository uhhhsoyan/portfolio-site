import React, { useState, useEffect } from 'react';
import '../styles/css/index.css';
import Card from './Card';
import Popup from './Popup';
//import videoSpotify from '../assets/img/video-spotify-test.mp4';
import PortfolioDetails from '../assets/content/PortfolioDetails';

console.log(PortfolioDetails)

const Portfolio = () => {
  const [focusedProject, setFocusedProject] = useState('spotify-mobile');
  const [popupDetails, setPopupDetails] = useState(null);

  useEffect(() => {
    setPopupDetails(PortfolioDetails[focusedProject])  
  }, [focusedProject])

  return (
    <>
      {popupDetails ? <Popup details={popupDetails}/> : null}
      <div className="section-portfolio" id="portfolio">
          <div className="u-center-text u-margin-bottom-large">
            <h2 className="heading-secondary">
              Portfolio
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              <Card 
                title='Spotify Clone'
                platform='Mobile'
                tech='React Native'
                id='spotify-mobile'
                setFocusedProject={setFocusedProject}
                description='A react native clone of the current Spotify mobile app, powered by the Spotify Web API'
              />
            </div>
            <div className="col-1-of-3">
              <Card 
                title='Weather App'
                platform='Mobile'
                tech='React Native'
                id='weather-mobile'
                setFocusedProject={setFocusedProject}
                description='A react native clone of the current Spotify mobile app, powered by the Spotify Web API'
              />
            </div>
            <div className="col-1-of-3">
              <Card 
                title='Country Quiz'
                platform='Web'
                tech='React'
                id='quiz-web'
                setFocusedProject={setFocusedProject}
                description='A react native clone of the current Spotify mobile app, powered by the Spotify Web API'
              />
            </div>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              <Card 
                title='Omnifood'
                platform='Web'
                tech='CSS'
                id='omnifood-web'
                setFocusedProject={setFocusedProject}
                description='A react native clone of the current Spotify mobile app, powered by the Spotify Web API'
              />
            </div>
            <div className="col-1-of-3">
              <Card 
                title='Windbnb'
                platform='Web'
                tech='React'
                id='windbnb-web'
                setFocusedProject={setFocusedProject}
                description='A react native clone of the current Spotify mobile app, powered by the Spotify Web API'
              />
            </div>
            <div className="col-1-of-3">
              <Card 
                title='Weather (Web)'
                platform='Web'
                tech='React'
                id='weather-web'
                setFocusedProject={setFocusedProject}
                description='A react native clone of the current Spotify mobile app, powered by the Spotify Web API'
              />
            </div>
          </div>
      </div>
    </>
  )
}

export default Portfolio;