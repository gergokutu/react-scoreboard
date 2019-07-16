import React from 'react';
import './App.css';
import Title from './components/Title'
import Scoreboard from './components/Scoreboard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title content='Game X' />
        <main className='Scoreboard-style'>
        <Scoreboard content='Scoreboard' />
        </main>
      </header>
    </div>
  );
}

export default App;
