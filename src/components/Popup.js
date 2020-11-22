import React from 'react';
import ReactPlayer from 'react-player';

const Popup = ({ details }) => {

  console.log(details.video)

  /*
  <video className="popup__video" controls muted>
    <source src={details.video} type="video/mp4" />
  </video>
  */

  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <video className="popup__video" controls muted>
            <source src={details.video} type="video/mp4" />
          </video>
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">&times;</a>
          <h2 className="heading-secondary u-margin-bottom-medium">{details.title}</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">{details.subtitle}</h3>
          <h3 className="heading-tertiary u-margin-bottom-small">{details.tech}</h3>
          <p className="popup__text">
            {details.description}
          </p>
          <a href={details.github} target="_blank" className="btn btn--blue">github</a>
        </div>
      </div>
    </div>
  )
}

export default Popup;