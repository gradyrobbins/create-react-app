import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
    <div className="App">
        <div className="WelcomeView">
          <header className="App-header">
              <h1 className="Banner"> State Quarters Collector</h1>
              <p>
                Hello from Render! And from Grady
              </p>
          </header>
          <div className="Message">
            <div className="Title">
              <span className="Details">
                <div className="NavButtons" >
                  <div className="NavButton">
                      Toby</div>
                    <div className="NavButton">
                      Nate</div>
                    <div className="NavButton">
                      Laney</div>
                    <div className="NavButton">
                      Andrew</div>
                    <div className="NavButton">
                      Mary</div>
                    <div className="NavButton">
                      Molly</div>
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
