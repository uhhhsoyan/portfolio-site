import React from 'react';
import '../styles/css/index.css';

const MobileNav = () => {
  const navLink = document.querySelectorAll('.mobile-nav__item'); // nav item class
  const checkbox = document.querySelector('.mobile-nav__checkbox'); //checkbox class
 
  // Add Event Listener to every nav link
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', checkboxOff);
  }
  
  // Uncheck checkbox
  function checkboxOff() {
    checkbox.checked = false;
  }

  return (
    <div className="mobile-nav">
      <input type="checkbox" className="mobile-nav__checkbox" id="navi-toggle" />
      <label for="navi-toggle" className="mobile-nav__button">
        <span className="mobile-nav__icon">&nbsp;</span>
      </label>
      <div className="mobile-nav__background">&nbsp;</div>
      <nav className="mobile-nav__nav">
        <ul className="mobile-nav__list">
          <li className="mobile-nav__item"><a href="#home" className="mobile-nav__link">Home</a></li>
          <li className="mobile-nav__item"><a href="#about-me" className="mobile-nav__link">About Me</a></li>
          <li className="mobile-nav__item"><a href="#portfolio" className="mobile-nav__link">Portfolio</a></li>
          <li className="mobile-nav__item"><a href="#resume" className="mobile-nav__link">Resume</a></li>
          <li className="mobile-nav__item"><a href="#contact" className="mobile-nav__link">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNav;
