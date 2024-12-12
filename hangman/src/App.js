import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';

import './App.css';

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      window.addEventListener('keydown', e => {
        if () {
          if (playable && keycode >= 65 && e.keycode <= 90) {
            const letter = e.key.toLowerCase();
    
            if(selectedWord.includes(letter)) {
              if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters, letter]);
    
                // displayWord();
              } else {
                // showNotification();
              } 
            } else {
                if (!wrongLetters.includes(letter)) {
                  setWrongLetters(wrongLetters => [...wrongLetters, letter]);
                } else {
                  // showNotification();
                }
              }
            }
          }
          
  });

  
  })
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />  
        <WrongLetters />
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
    </>
  );
}

export default App;
