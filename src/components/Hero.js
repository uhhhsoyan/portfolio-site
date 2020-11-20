import React from 'react';
import '../styles/css/index.css';

const Hero = () => {
  return (
    <div className="section-hero" id="home">
      <div className="section-hero__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Hi, I'm Eric.</span>
          <span className="heading-primary--sub">a front-end software engineer</span>
        </h1>
      </div>
      <div className="section-hero__learn-more">
        <h3 className="heading-tertiary">&darr; &nbsp; learn more &nbsp; &darr;</h3>
      </div>
    </div>
  )
}

export default Hero;