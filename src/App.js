import React, { Component } from 'react';

import './index.css';


class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">

          <p>
            Hello from Render! And from Grady
          </p>

      </header>
        <div className="WelcomeView">
          <h1 className="Banner"> State Quarters Collector</h1>
          <div className="Message">
            <div className="Title">
              <span className="Details">
                <div className="NavButtons" >
                  <div className="NavButton">
                    a(href="/toby")  Toby</div>
                    <div className="NavButton">
                    a(href="/nate")  Nate</div>
                    <div className="NavButton">
                    a(href="/laney")  Laney</div>
                    <div className="NavButton">
                    a(href="/andrew")  Andrew</div>
                    <div className="NavButton">
                    a(href="/mary")  Mary</div>
                    <div className="NavButton">
                    a(href="/molly")  Molly</div>
                </div>
              </span>
            </div>
          </div>
    </div>


      </div>

    );
  }
}

export default App;
