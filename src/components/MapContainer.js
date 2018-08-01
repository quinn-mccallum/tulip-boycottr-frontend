import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { connect } from 'react-redux';
import { loadBoycotts } from '../actions/boycottActions'

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

const MarkerList = ({ markerData }) => {
    //map over each item in markerData state, and for each, create a Marker component with the lat and lng
    //of that boycottLocation.
    return markerData.map(boycottLocation => {
      return <Marker onClick={event => console.log(boycottLocation.data.name, ' was clicked')}
        name={boycottLocation.data.name}
        key={`${boycottLocation.data.lat}${boycottLocation.data.lng}`}
        position={{lat: boycottLocation.data.lat, lng: boycottLocation.data.lng}}
      />
    })
}

const mapStateToProps = (state) => {
  return {markerData: state.boycottLocations}
}

const mapDispatchToProps = (dispatch) => {
  return {loadMarkers: () => {
    return dispatch(loadBoycotts)
  }}
}

export class BoycottMap extends Component {
  constructor() {
    super();
    this.state = {
      userLat: 0,
      userLng: 0,
      markerData: []
    }
  }

  componentDidMount() {
   this.props.loadMarkers();
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
      {MarkerList({markerData: this.props.markerData})}
      </Map>
    );
  }
}

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(BoycottMap);

export default GoogleApiWrapper({
  apiKey: REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer)
