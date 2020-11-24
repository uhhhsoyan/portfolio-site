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
                <h3 className="heading-tertiary u-margin-bottom-medium u-center-text">Skills</h3>
                <ul className="resume__list resume__list--columns-three">
                  <li className="resume__item--icon"><FaReact color="#5ED4F3" className="resume__icon"/>React</li>
                  <li className="resume__item--icon"><FaReact color="#5ED4F3" className="resume__icon" />React Native</li>
                  <li className="resume__item--icon"><SiJavascript color="#EFD91D" className="resume__icon" />Javascript</li>
                  <li className="resume__item--icon"><SiTypescript color="#3074C1" className="resume__icon" />Typescript</li>
                  <li className="resume__item--icon"><FaNodeJs color="#539E43" className="resume__icon" />NodeJS</li>
                  <li className="resume__item--icon"><FaHtml5 color="#DD4B24" className="resume__icon" />HTML</li>
                  <li className="resume__item--icon"><FaCss3Alt color="#2349DE" className="resume__icon" />CSS</li>
                  <li className="resume__item--icon"><FaSass color="#C76395" className="resume__icon" />Sass</li>
                  <li className="resume__item--icon"><SiPostgresql color="#32648D" className="resume__icon" />SQL</li>
                </ul>
                <h3 className="heading-tertiary u-margin-bottom-medium u-center-text">Proficient</h3>
                <ul className="resume__list resume__list--columns-four">
                  <li className="resume__item--icon"><SiJquery color="#0666A6" className="resume__icon" />JQuery</li>
                  <li className="resume__item--icon"><FaJava color="#E51C20" className="resume__icon" />Java</li>
                  <li className="resume__item--icon"><FaPython color="#F6BB07" className="resume__icon" />Python</li>
                  <li className="resume__item--icon"><DiRuby color="#A51301" className="resume__icon" />Ruby</li>
                  </ul>
              </div>
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small u-center-text">Education</h3>
                <ul className="resume__list u-center-text">
                  <li className="resume__item">MEng, Mechanical Engineering - Duke University</li>
                  <li className="resume__item">BSE, Mechanical Engineering - Duke University</li>
                  <li className="resume__item">&nbsp;</li>
                </ul>
                <h3 className="heading-tertiary u-margin-bottom-small u-center-text">Relevant Coursework</h3>
                <ul className="resume__list u-center-text">
                  <li className="resume__item">The Complete React Native + Hooks Course (S Grider)</li>
                  <li className="resume__item">React Native: Advanced Concepts (S Grider)</li>
                  <li className="resume__item">Modern React with Redux (S Grider)</li>
                  <li className="resume__item">Typescript: Complete Developer's Guide (S Grider)</li>
                  <li className="resume__item">The Complete JS Course (J Schmedtmann)</li>
                  <li className="resume__item">Advanced CSS & Sass (J Schmedtmann)</li>
                  <li className="resume__item">Data Structures & Algorithms: Java (Duke University)</li>
                </ul>
              </div>
          </div>
      </div>
    )
}

export default Resume;

