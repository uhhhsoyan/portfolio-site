import React from 'react';
import '../styles/css/index.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaJava, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiPostgresql, SiJquery } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';

const Resume = () => {
    return (
        <div className="section-resume" id="resume">
          <div className="u-center-text u-margin-bottom-medium">
            <h2 className="heading-secondary">
              Resume
            </h2>
          </div>
          <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">Skills</h3>
                <ul className="section-resume__column-list">
                  <li className="section-resume__list-item"><FaReact />React</li>
                  <li className="section-resume__list-item"><FaReact />React Native</li>
                  <li className="section-resume__list-item"><SiJavascript />Javascript</li>
                  <li className="section-resume__list-item"><SiTypescript />Typescript</li>
                  <li className="section-resume__list-item"><FaNodeJs />NodeJS</li>
                  <li className="section-resume__list-item"><FaHtml5 />HTML</li>
                  <li className="section-resume__list-item"><FaCss3Alt />CSS</li>
                  <li className="section-resume__list-item"><FaSass />Sass</li>
                  <li className="section-resume__list-item"><SiPostgresql />SQL</li>
                </ul>
                <h3 className="heading-tertiary u-margin-bottom-small">Proficiencies</h3>
                <ul className="section-resume__column-list">
                  <li className="section-resume__list-item"><SiJquery />JQuery</li>
                  <li className="section-resume__list-item"><FaJava />Java</li>
                  <li className="section-resume__list-item"><FaPython />Python</li>
                  <li className="section-resume__list-item"><DiRuby />Ruby</li>
                  </ul>
              </div>
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">Education</h3>
                <ul>
                  <li className="section-resume__list-item">MEng, Mechanical Engineering - Duke University</li>
                  <li className="section-resume__list-item">BSE, Mechanical Engineering - Duke University</li>
                </ul>
                <h3 className="heading-tertiary u-margin-bottom-small">Relevant Coursework</h3>
                <ul>
                  <li className="section-resume__list-item">The Complete React Native + Hooks Course (S Grider)</li>
                  <li className="section-resume__list-item">React Native: Advanced Concepts (S Grider)</li>
                  <li className="section-resume__list-item">Modern React with Redux (S Grider)</li>
                  <li className="section-resume__list-item">Typescript: Complete Developer's Guide (S Grider)</li>
                  <li className="section-resume__list-item">The Complete JS Course (J Schmedtmann)</li>
                  <li className="section-resume__list-item">Advanced CSS & Sass (J Schmedtmann)</li>
                </ul>
              </div>
          </div>
      </div>
    )
}

export default Resume;

