import React from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />  
        <WrongLetters />
      </div>
    </>
  );
}

export default App;
