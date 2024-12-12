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
        if (playable && keycode >= 65 && e.keycode <= 90) {
            const letter = e.key.toLowerCase();
    
            if(selectedWord.includes(letter)) {
              if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters, letter]);
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
          window.addEventListener('keydown', handleKeydown);

          return () => window.removeEventListener('keydown', handleKeydown);
      // )} // not in tutorial but needed for my code?              
  }, [correctLetters, wrongLetters, playable]);


  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />  
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
    </>
  );
}

export default App;
