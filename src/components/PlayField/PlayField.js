import React, { useState } from 'react';

const PlayField = () => {
  const [playerName, setPlayerName] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    console.log(playerName)
  }

  return (
    <div >
      <p>Play Field</p>
      <form>
        <input
          type="text"
          placeholder="Pick a name..."
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <input 
          type="submit" 
          onClick={(e) => handleSubmit(e)}
        />
      </form>
    </div>
  );
}

export default PlayField;