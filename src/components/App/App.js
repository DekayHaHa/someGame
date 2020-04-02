import React from 'react';
import PlayField from '../PlayField/PlayField';
import PlayerInfo from '../PlayerInfo/PlayerInfo'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <p>IN App</p>
      <PlayField />
      <PlayerInfo /> 
    </div>
  );
}

export default App;
