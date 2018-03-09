import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Color box redux</h1>
        <input className = 'button' type="color"/>
        <div className = 'box'></div>
      </div>
    );
  }
}

export default App;
