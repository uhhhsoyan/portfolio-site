import React, { useState, useEffect } from 'react';
import '../styles/css/index.css';
import Card from './Card';
import Popup from './Popup';
import PortfolioDetails from '../assets/content/PortfolioDetails';

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
                description='React native clone of the Spotify mobile app with full search and playback functionality. Powered by Spotify Web API.'
              />
            </div>
            <div className="col-1-of-3">
              <Card 
                title='FB Clone'
                platform='Mobile'
                tech='React Native'
                id='ericbook'
                setFocusedProject={setFocusedProject}
                description='Fullstack mobile social media app enabling users to login, create posts, and like and comment on posts from their friends.'
              />
            </div>
            <div className="col-1-of-3">
              <Card 
                title='Weather App'
                platform='Mobile'
                tech='React Native'
                id='weather-mobile'
                setFocusedProject={setFocusedProject}
                description='Weather app enabling users to search locations and view corresponding forecast and weather data. Powered by Metaweather API.'
              />
            </div>
          </div>
          <div className="row">
          <div className="col-1-of-3">
              <Card 
                title='Windbnb'
                platform='Mobile'
                tech='React Native'
                id='windbnb-mobile'
                setFocusedProject={setFocusedProject}
                description='Mock Airbnb mini-app allowing users to search for stays, filter by location and guests, and view results.'
              />
            </div>
            <div className="col-1-of-3">
              <Card 
                title='Omnifood'
                platform='Web'
                tech='CSS'
                id='omnifood-web'
                setFocusedProject={setFocusedProject}
                description='Beautiful landing page for a hypothetical food delivery company, built entirely with HTML and CSS.'
              />
            </div>
            <div className="col-1-of-3">
                <Card 
                  title='Country Quiz'
                  platform='Web'
                  tech='React'
                  id='country-quiz-web'
                  setFocusedProject={setFocusedProject}
                  description='React web app that quizzes users on country flags and capitals, with randomly generated questions from the REST Countries API.'
                />
              </div>
          </div>
      </div>
    </>
  )
}

export default Portfolio;