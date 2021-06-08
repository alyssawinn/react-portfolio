import React from 'react';
import headShot from "../../assets/headshot.jpg";

function About() {
    return (
        <section>
            <div className="about">
                <img src={headShot} alt="headshot" />
                <div className="about-text">
                    <h2>About.</h2>
                    <p><span className="about-text-header">Ready to help you attract and secure customers with a modern, mobile-friendly website!</span><br /><br />
                        Hi, I'm Alyssa! I'm an equal parts corporate + creative full-stack web developer.<br />Graduated from Utah State University in
                        Management Information Systems and from the University of Utah in full-stack web development.<br />Thriving on Diet Dr. Pepper, reading in bed, weekend yoga classes,
                        and Sex & the City marathons.<br /><br />
                        <span className="about-text-header">Let's work together to take your website to the next level!</span>
                        </p>
                </div>
            </div>
        </section>
    )
}

export default About;