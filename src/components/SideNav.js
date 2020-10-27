import React from 'react';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="sidenav">
            <p className="sidenav-title">Eric Essoyan</p>
            <a href="#">Home</a>
            <a href="#">About Me</a>
            <a href="#">Portfolio</a>
            <a href="#">Resume</a>
            <a href="#">Contact</a>
        </div>
    )
}

export default SideNav;