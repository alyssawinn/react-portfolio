import React from 'react';
import resume from "../../assets/resume.pdf";

function Resume() {
    return (
        <section>
            <div>
                <p>Proficiencies:
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>APIs</li>
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                    </p>
                    <p>Download my resume <a class="resume" href={resume} target="_blank" download rel="noreferrer">here</a></p>
            </div>
        </section>
    )
}

export default Resume;