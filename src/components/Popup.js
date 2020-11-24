import React from 'react';
import ReactPlayer from 'react-player';
import { FaGithub } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';

const Popup = ({ details }) => {

  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <div className="video-wrapper">
            <ReactPlayer
              className="video-player"
              url={details.video}
              playing={true}
              loop={true}
              muted={true}
              width='70%'
              height='70%'
            />
          </div>
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">&times;</a>
          <h2 className="heading-secondary u-margin-bottom-medium">{details.title}</h2>
          <div className="row">
            <div className="col-2-of-3">
              <h3 className="heading-tertiary u-margin-bottom-small">Description</h3>
              <p className="popup__text u-margin-bottom-small">
                {details.description}
              </p>
              <p className="popup__text">
                Click the links below to learn more!
              </p>
            </div>
            <div className="col-1-of-3">
              <h3 className="heading-tertiary u-margin-bottom-small">Technology</h3>
                <ul>
                  {details.tech.map(tech => {
                    return <li>{tech}</li>
                  })}
                </ul>
            </div>
          </div>
          <a href={details.github} target="_blank" rel="noreferrer" className="btn btn--blue btn--icon">
            <div className="btn__icon-row" >
              <FaGithub className="btn__icon"/><p>Go to github</p>
            </div>
          </a>
          {details.site ? (
            <a href={details.site} target="_blank" rel="noreferrer" className="btn btn--blue btn--icon">
              <div className="btn__icon-row" >
              <MdWeb className="btn__icon"/><p>See it live</p>
              </div>
            </a>
          ) : (
            null
          )}
        </div>
      </div>
    </div>
  )
}

export default Popup;