import React from 'react';
import './App.css';
import Menu from './Components/Menu.js'

function App(props) {
  return (
    <div className="App">
      <div className="flex-col">
        <Menu></Menu>
        <div></div>
      </div>
    </div>
  );
}

export default App;
