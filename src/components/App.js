import React, { Component } from "react";
import { connect } from 'react-redux';
import GoogleMapsComponent from "./MapContainer";
import Button from "./Button";
import BoycottModal from "./BoycottModal";
import { fetchNearbyPlaces } from '../actions/placesActions';
import { toggleModal } from '../actions/boycottModalActions'
import "../App.css";
import 'bulma/css/bulma.css'


class App extends Component {
  // constructor(props){
  //   super(props)
  //
  //   this.toggleModal = this.toggleModal.bind(this);
  // }


  // toggleModal = () => {
  //   if(!this.state.isActive){
  //       this.props.fetchNearbyPlaces(this.props.userLat, this.props.userLng);
  //   }
  //   this.setState({
  //     isActive: !this.state.isActive
  //   });
  // }

  modalToggleHelper = () => {
    if (this.props.userLat && this.props.userLng && !this.props.isLoading && this.props.nearbyPlaces.length === 0){
      this.props.fetchNearbyPlaces(this.props.userLat, this.props.userLng)
    }
    this.props.toggleModalAction(!this.props.modalIsActive)
  }

  modalToggleHelper = () => {
    if (this.props.userLat && this.props.userLng && !this.props.isLoading && this.props.nearbyPlaces.length === 0){
      this.props.fetchNearbyPlaces(this.props.userLat, this.props.userLng)
    }
    this.props.toggleModalAction(!this.props.modalIsActive)
  }

<<<<<<< HEAD
  render() {
=======
    // const { modalIsActive, toggleModalAction } = this.props;
>>>>>>> 47675a15c0253e7621d942b0952fb3c56e9f9b49

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Boycottr</h1>
        </header>

        <Button buttonText="Add Boycott" onClickHandler={this.modalToggleHelper}/>
        <BoycottModal
          isActive={this.props.modalIsActive}
          onClose={this.props.toggleModalAction}

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

const mapDispatchToProps = {
  toggleModalAction: toggleModal,
  fetchNearbyPlaces

}

const mapStateToProps = ({ googleMaps, googlePlaces, modal }) => {
    const { userLat, userLng, isLoading } = googleMaps;
    const { nearbyPlaces } = googlePlaces;
    const { isActive } = modal;
    return { userLat, userLng, modalIsActive: isActive, isLoading, nearbyPlaces }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
