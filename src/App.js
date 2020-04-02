import React from 'react';
import Board from './Board';
import Filter from './Filter';
import moment from 'moment';

const date = moment().format("dddd MMMM D, YYYY");

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Daily News</h1>
        <Filter />
        <div className="date">{moment().format("dddd MMMM D, YYYY")}</div>
        <hr className="app-line"/>
      </header>
      <Board />
    </div>
  );
}

export default App;
