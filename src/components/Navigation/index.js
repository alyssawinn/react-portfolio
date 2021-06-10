import React from 'react';

function Navigation(props) {
    const {
        selectedSection,
        setSelectedSection
    } = props;

    return (
        <nav>
            <ul>
                <li>
                    <span onClick={ () => setSelectedSection("about")}>About</span>
                </li>
                <li>
                    <span onClick={ () => setSelectedSection("portfolio")}>Portfolio</span>
                </li>
                <li>
                    <span onClick={ () => setSelectedSection("contact")}>Contact</span>
                </li>
                <li>
                    <span onClick={ () => setSelectedSection("resume")}>Resume</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;