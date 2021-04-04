import './App.css';
import React from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Services } from './components/Services/Services'
import LightSpeed from 'react-reveal/LightSpeed'
import { Portfolio } from './components/Portfolio/Portfolio';
import { Review } from './components/Review/Review';

function App() {

  return (
    <>
      <Navbar />
      <LightSpeed left>
      <Home />
      </LightSpeed>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
      <Services />
      <br/>
      <Portfolio />
      <br/><br/><br/><br/>
      <Review />
      <br/>
      <br/>
    </>
  );
}

export default App;
