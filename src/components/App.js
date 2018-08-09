import React, { Component } from "react";
import { connect } from 'react-redux';
import GoogleMapsComponent from "./MapContainer";
import Button from "./Button";
import BoycottModal from "./BoycottModal";
import { fetchNearbyPlaces } from '../actions/placesActions';

import "../App.css";
import 'bulma/css/bulma.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = () => {
    if(!this.state.isActive){
        this.props.fetchNearbyPlaces(this.props.userLat, this.props.userLng);
    }
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Boycottr</h1>
        </header>
        <Button buttonText="Add Boycott" onClickHandler={this.toggleModal}/>
        <BoycottModal
          isActive={this.state.isActive}
          onClose={this.toggleModal}
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

const mapStateToProps = ({ googleMaps }) => {
    const { userLat, userLng } = googleMaps;
    return { userLat, userLng }
}

export default connect(mapStateToProps, { fetchNearbyPlaces })(App);
