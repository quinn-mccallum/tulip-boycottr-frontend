import React, { Component } from "react";
import { connect } from 'react-redux';
import GoogleMapsComponent from "./MapContainer";
import Button from "./Button";
import BoycottModal from "./BoycottModal";
import { fetchNearbyPlaces } from '../actions/placesActions';

import "../App.css";
import 'bulma/css/bulma.css'
import { toggleModal } from '../actions/boycottModalActions'
import { connect } from 'react-redux';

class App extends Component {
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

    // const { modalIsActive, toggleModalAction } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Boycottr</h1>
        </header>

        <Button buttonText="Add Boycott" onClickHandler={this.toggleModal}/>
        <BoycottModal
          isActive={this.state.isActive}
          onClose={this.toggleModal}

        {/* <Button buttonText="Add Boycott" onClickHandler={() => toggleModalAction(!modalIsActive)}/>
        <BoycottModal
          isActive={modalIsActive}
          onModalToggle={toggleModalAction} */}

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

// const mapStateToProps = (state) => {
//   return {
//     modalIsActive: state.modal.isActive
//   }
// }
//
// const mapDispatchToProps = {
//   toggleModalAction: toggleModal
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
