import React from 'react';
import '../styles/css/index.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
    return (
        <div className="section-contact" id="contact">
          <div className="u-center-text u-margin-bottom-large">
            <h2 className="heading-secondary-white">
              Contact Me
            </h2>
          </div>
          <div className="contact__row">
            <div className="contact__container">
              <a href="mailto:eric.essoyan@gmail.com" target="_blank" rel="noreferrer" className="contact__anchor">
                <h3><HiOutlineMail className="contact__icon"/></h3>
                <h3 className="contact__label">eric.essoyan@gmail.com</h3>
              </a>
            </div>
            <div className="contact__container">
              <a href="https://github.com/uhhhsoyan" target="_blank" rel="noreferrer" className="contact__anchor">
                <h3><FaGithub className="contact__icon"/></h3>
                <h3 className="contact__label">uhhhsoyan</h3>
              </a>
            </div>
            <div className="contact__container">
              <a href="https://www.linkedin.com/in/eric-essoyan-a166a48a/" target="_blank" rel="noreferrer" className="contact__anchor">
                <h3><FaLinkedin className="contact__icon"/></h3>
                <h3 className="contact__label">eric-essoyan</h3>
              </a>
            </div>
          </div>
      </div>
    )
}

export default Contact;

/*

<div className="row">
            <div className="col-1-of-3">
              <div className="contact-icons__container">
                <a href="mailto:eric.essoyan@gmail.com" target="_blank" rel="noreferrer" className="contact-icons__anchor">
                  <h3><HiOutlineMail className="contact-icons__icon"/></h3>
                  <h3 className="heading-tertiary">eric.essoyan@gmail.com</h3>
                </a>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="contact-icons__container">
                <a href="https://github.com/uhhhsoyan" target="_blank" rel="noreferrer" className="contact-icons__anchor">
                  <h3><FaGithub className="contact-icons__icon"/></h3>
                  <h3 className="heading-tertiary">github.com/uhhhsoyan</h3>
                </a>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="contact-icons__container">
                <a href="https://www.linkedin.com/in/eric-essoyan-a166a48a/" target="_blank" rel="noreferrer" className="contact-icons__anchor">
                  <h3><FaLinkedin className="contact-icons__icon"/></h3>
                  <h3 className="heading-tertiary">linkedin.com/eric-essoyan</h3>
                </a>
              </div>
            </div>
          </div>

*/

