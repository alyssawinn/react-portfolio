import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [selectedSection, setSelectedSection] = useState("about");
  const renderSession = () => {
    if (selectedSection === "about") {
      return <About />
    } else if (selectedSection === "portfolio") {
      return <Portfolio />
    } else if (selectedSection === "contact") {
      return <Contact />
    } else if (selectedSection === "resume") {
      return <Resume />
    }
    return <>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Resume></Resume>
    </>
  }
  return (
    <div>
      <Header
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}></Header>
      <main>
        {renderSession()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
