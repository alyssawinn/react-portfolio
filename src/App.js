import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
          <About></About>
          <Portfolio></Portfolio>
          <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
