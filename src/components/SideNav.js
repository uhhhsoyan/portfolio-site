import React from 'react';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="sidenav">
            <p className="sidenav-title">Eric Essoyan</p>
            <a href="#home">Home</a>
            <a href="#about-me">About Me</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </div>
    )
}

export default SideNav;