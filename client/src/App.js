import React from 'react';
import Wizard from './components/wizard';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stepzilla.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <header className="rectangle">
          <img src='/images/logos/logo.png' className="logo" alt="logo" />
        </header>
        <Wizard />
      </Container>
    </div>
  );
}

export default App;
