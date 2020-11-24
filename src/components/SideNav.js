import React from 'react';
import '../styles/css/index.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SideNav = () => {
  return (
    <div className="sidenav">
      <p className="sidenav__title">Eric Essoyan</p>
      <a href="#home" className="sidenav__menu-items">Home</a>
      <a href="#about-me" className="sidenav__menu-items">About Me</a>
      <a href="#portfolio" className="sidenav__menu-items">Portfolio</a>
      <a href="#resume" className="sidenav__menu-items">Resume</a>
      <a href="#contact" className="sidenav__menu-items">Contact</a>
      <div className="sidenav__footer">
        <a href="mailto:eric.essoyan@gmail.com" target="_blank" rel="noreferrer" >
          <p><HiOutlineMail className="sidenav__icon"/></p>
        </a>
        <a href="https://github.com/uhhhsoyan" target="_blank" rel="noreferrer" >
          <p><FaGithub className="sidenav__icon"/></p>
        </a>
        <a href="https://www.linkedin.com/in/eric-essoyan-a166a48a/" target="_blank" rel="noreferrer" >
          <p><FaLinkedin className="sidenav__icon"/></p>
        </a>
      </div>
    </div>
  )
}

export default SideNav;
