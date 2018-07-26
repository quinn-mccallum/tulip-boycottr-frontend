import React, { Component } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

export class MapContainer extends Component {
  render() {
    return ( 
      <Map 
        google = {this.props.google}
        zoom = {10}
      >
      </Map> 
    );
  }
}

export default GoogleApiWrapper({
  apiKey: REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer)
