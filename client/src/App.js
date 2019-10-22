import React from 'react';
import logo from './images/Mentra logo.png';
import Wizard from './components/wizard';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stepzilla.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="rectangle">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <Container>
        <Wizard />
      </Container>
    </div>
  );
}

export default App;
