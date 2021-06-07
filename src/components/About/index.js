import React from 'react';
import headShot from "../../assets/headshot.jpg";

function About() {
    return (
        <section>
            <div>
                <span>
                    <img src={headShot} alt="headshot" />
                </span>
                <div>
                    <h2>About.</h2>
                    <p>Equal parts corporate + creative<br /><br />
                        Utah State University MIS undergrad and University of Utah Coding Bootcamp graduate<br /><br />
                        Full-stack web developer thriving on Diet Dr. Pepper, reading in bed, weekend pilates classes, and Sex & the City marathons<br /><br />
                        Ready to help you attract customers with a modern, mobile-friendly website!</p>
                </div>
            </div>
        </section>
    )
}

export default About;