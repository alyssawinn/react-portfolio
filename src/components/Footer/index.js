import React from 'react';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

function Footer() {
    return (
        <footer>
            <p>If you have any questions, please reach out!<br />
            <a href="https://github.com/alyssawinn/" target="_blank" rel="noreferrer"><img className="icon" src={github} alt="GitHub Logo"/></a>
            <a href="https://www.linkedin.com/in/alyssawinn/" target="_blank" rel="noreferrer"><img className="icon" src={linkedin} alt="LinkedIn Logo"/></a>
            </p>
        </footer>
    )
}

export default Footer;