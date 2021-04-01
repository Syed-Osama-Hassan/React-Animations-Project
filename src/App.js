import './App.css';
import React from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Services } from './components/Services/Services'
import LightSpeed from 'react-reveal/LightSpeed'

function App() {

  return (
    <div>
      <Navbar />
      <LightSpeed left>
      <Home />
      </LightSpeed>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Services />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App;
