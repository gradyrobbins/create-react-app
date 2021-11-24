import React, { Component } from 'react';

import './App.css';
import qtr from './united-states-quarter-front.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={qtr} className="App-logo" alt="logo" />
          <p>
            Hello from Render! And from Grady
          </p>

        </header>
      </div>
    );
  }
}

export default App;
