import React, { Component } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = { 
      userLat: 0,
      userLng: 0
    }
  }

  componentDidMount() {

   const success = (pos) => {
     this.setState({userLat: pos.coords.latitude, userLng: pos.coords.longitude});
   }
   
    navigator.geolocation.getCurrentPosition(success)
  }
  
  render() {
    return ( 
      <Map 
        google = {this.props.google}
        zoom = {10}
        center = {
          {
            lat: this.state.userLat,
            lng: this.state.userLng
          }
        }
      >
      </Map> 
    );
  }
}

export default GoogleApiWrapper({
  apiKey: REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer)
