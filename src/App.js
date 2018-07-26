import React, { Component } from "react";

import MapContainer from "./components/MapContainer";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    // this is here as an example for how to connect to the backend
    // it should be removed once development has started
    // this.props.healthCheck();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <div className="map-container">
              <MapContainer
                className="map" 
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
