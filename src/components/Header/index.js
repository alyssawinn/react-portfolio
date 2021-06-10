import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
    const {
        selectedSection,
        setSelectedSection
    } = props;
    return (
        <header>
            <h1>Alyssa Winn</h1>
            <Navigation
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}></Navigation>
        </header>
    )
}

export default Header;