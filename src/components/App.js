import React, { Component } from "react";

import GoogleMapsComponent from "./MapContainer";
import Button from "./Button";
import BoycottModal from "./BoycottModal";
import logo from "../logo.svg";
import "../App.css";
import 'bulma/css/bulma.css'
import { toggleModal } from '../actions/boycottModalActions'
import { connect } from 'react-redux';

class App extends Component {

  render() {

    const { modalIsActive, toggleModalAction } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Boycottr</h1>
        </header>
        <Button buttonText="Add Boycott" onClickHandler={() => toggleModalAction(!modalIsActive)}/>
        <BoycottModal 
          isActive={modalIsActive}
          onModalToggle={toggleModalAction}
         />
        <div className="App-intro">
          <div className="map-container">
              <GoogleMapsComponent
                className="map" 
              />  
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalIsActive: state.modal.isActive
  }
}

const mapDispatchToProps = {
  toggleModalAction: toggleModal
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
