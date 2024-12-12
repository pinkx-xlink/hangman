import React from 'react';
import Header from './components/Header';
import Figure from './components/Figure';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />  
      </div>
    </>
  );
}

export default App;
