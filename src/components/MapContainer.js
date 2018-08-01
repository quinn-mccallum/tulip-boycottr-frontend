import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      userLat: 0,
      userLng: 0,
      markerData: []
    }
  }

  componentDidMount() {

   const success = (pos) => {
     this.setState({userLat: pos.coords.latitude, userLng: pos.coords.longitude});
   }
   //fetch all boycott data from our API endpoint
   fetch('http://localhost:8081/boycotts/boycottLocation')
    .then(res => res.json())
    .then(data => {
      //store data we retrieved inside of local state, @TODO reduxify
      this.setState({
        markerData: data
      });
    })
    navigator.geolocation.getCurrentPosition(success)
  }

  renderMarkers = () => {
    //map over each item in markerData state, and for each, create a Marker component with the lat and lng
    //of that boycottLocation.
    return this.state.markerData.map(boycottLocation => {
      return <Marker onClick={event => console.log(boycottLocation.data.name, ' was clicked')}
        name={boycottLocation.data.name}
        key={`${boycottLocation.data.lat}${boycottLocation.data.lng}`}
        position={{lat: boycottLocation.data.lat, lng: boycottLocation.data.lng}}
      />
    })
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
        {this.renderMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer)
