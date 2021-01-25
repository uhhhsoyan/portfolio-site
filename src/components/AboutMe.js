import React from 'react';
import '../styles/css/index.css';
import skydive from '../assets/img/skydive.jpg';

const AboutMe = () => {
  return (
    <div className="section-about" id="about-me">
      <div className="u-center-text u-margin-bottom-large">
        <h2 className="heading-secondary">
          About me
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">I love to build beautiful apps</h3>
          <p className="paragraph">
            I'm a full-stack software engineer specializing in React & React Native applications. I love to build beautiful, 
            powerful web and mobile apps - check out some of my work below!
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">My background</h3>
          <p className="paragraph">
            I studied Mechanical Engineering at Duke University, worked as a management consultant at Kearney,
            and recently joined the family real estate business - all the while building out my full-stack skillset and portfolio. 
          </p>
          <p className="paragraph">
            I also like to jump out of perfectly good airplanes!
          </p>
          <a href="#contact" className="btn-text">Let's connect &rarr;</a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img src={skydive} alt="skydive-bio" className="composition__photo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;