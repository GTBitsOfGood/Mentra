import React from 'react';
import logo from './images/Mentra logo.png';
import Question from './components/question';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="rectangle">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <Question/>
    </div>
  );
}

export default App;
