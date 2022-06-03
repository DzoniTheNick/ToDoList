import React from 'react'
import {GrLinkedin, GrGithub} from "react-icons/gr";

function About() {
  return (
    <div className='about'>
        <h1>CONTACT INFO</h1>
        <ul className='contact-type'>
            <li>
                <a href='https://github.com/DzoniTheNick' className='github'><GrGithub></GrGithub></a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/nikolapetrovic12/' className='linkedin'><GrLinkedin></GrLinkedin></a>
            </li>
        </ul>
    </div>
  );
}

export default About