import React from 'react';
import '../styles/css/index.css';

const Card = ({ title, platform, tech, id, setFocusedProject, cardNumber, description }) => {
  
  
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture--${id}`}>
          &nbsp;
        </div>
        <h4 className="card__heading">
          <span className="card__heading-span card__heading-span--1">
            {title}
          </span>
        </h4>
        <div className="card__details">
          <div className="card__details--sub-header">
            <h1>{platform}</h1>
            <h1>{tech}</h1>
          </div>
          <p className="paragraph">{description}</p>
        </div>
      </div>
      <div className="card__side card__side--back card__side--back-1">
        <a href="#popup" onClick={() => setFocusedProject(id)} className="btn btn--white">Learn more</a>
      </div>
    </div>
  )
}

export default Card;