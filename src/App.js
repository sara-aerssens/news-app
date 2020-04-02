import React from 'react';
import Board from './Board';
import Filter from './Filter';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>News</h1>
      </header>
      <Filter />
      <Board />
    </div>
  );
}

export default App;
