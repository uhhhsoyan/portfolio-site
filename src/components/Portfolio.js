import React from 'react';
import '../styles/css/index.css';
import Card from './Card';

const Portfolio = () => {
    return (
        <div className="section-portfolio" id="portfolio">
            <div className="u-center-text u-margin-bottom-large">
              <h2 className="heading-secondary">
                Portfolio
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-3">
                <Card 
                  title='Spotify Mobile'
                  platform='Mobile'
                  tech='React Native'
                  cardNumber={1}
                  description='A react native clone of the current Spotify mobile app, powered by the Spotify Web API'
                />
              </div>
              <div className="col-1-of-3">
                <Card 
                  title='Weather App'
                  platform='Mobile'
                  tech='React Native'
                  cardNumber={2}
                  description='A react native clone of the current Spotify mobile app, powered by the Spotify Web API'
                />
              </div>
              <div className="col-1-of-3">
                <Card 
                  title='Country Quiz'
                  platform='Web'
                  tech='React'
                  cardNumber={3}
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
                  cardNumber={4}
                  description='A react native clone of the current Spotify mobile app, powered by the Spotify Web API'
                />
              </div>
              <div className="col-1-of-3">
                <Card 
                  title='Windbnb'
                  platform='Web'
                  tech='React'
                  cardNumber={5}
                  description='A react native clone of the current Spotify mobile app, powered by the Spotify Web API'
                />
              </div>
              <div className="col-1-of-3">
                <Card 
                  title='Weather (Web)'
                  platform='Web'
                  tech='React'
                  cardNumber={6}
                  description='A react native clone of the current Spotify mobile app, powered by the Spotify Web API'
                />
              </div>
            </div>
        </div>
    )
}

export default Portfolio;