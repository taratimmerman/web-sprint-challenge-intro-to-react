import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  // const [currentCharId, setCurrentCharId] = useState('1');

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
      <div>
      {characters.map((val, idx)=>{
        return <Character character={val} key={idx}/>
      })}
      </div>
    </div>
  );
}

export default App;
