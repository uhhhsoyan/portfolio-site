import React, { useState } from 'react';
import '../styles/css/index.css';

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  

  return (
    <div className="mobile-nav">
      <input checked={menuOpen} onChange={toggleMenu} type="checkbox" className="mobile-nav__checkbox" id="navi-toggle" />
      <label for="navi-toggle" className="mobile-nav__button">
        <span className="mobile-nav__icon">&nbsp;</span>
      </label>
      <div className="mobile-nav__background">&nbsp;</div>
      <nav className="mobile-nav__nav">
        <ul className="mobile-nav__list">
          <li className="mobile-nav__item"><a href="#home" className="mobile-nav__link" onClick={toggleMenu}>Home</a></li>
          <li className="mobile-nav__item"><a href="#about-me" className="mobile-nav__link" onClick={toggleMenu}>About Me</a></li>
          <li className="mobile-nav__item"><a href="#portfolio" className="mobile-nav__link" onClick={toggleMenu}>Portfolio</a></li>
          <li className="mobile-nav__item"><a href="#resume" className="mobile-nav__link" onClick={toggleMenu}>Resume</a></li>
          <li className="mobile-nav__item"><a href="#contact" className="mobile-nav__link" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNav;

/*

*/