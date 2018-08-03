import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { connect } from 'react-redux';
import { loadBoycotts } from '../actions/boycottActions'
import { fetchUserLocationInformation } from '../actions/googleMapsActions';

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
  return {
    markerData: state.boycottLocations,
    userLat: state.googleMaps.userLat,
    userLng: state.googleMaps.userLng,
    isLoading: state.googleMaps.isLoading,
    error: state.googleMaps.error,
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMarkers: () => { return dispatch(loadBoycotts) },
    fetchUserLocation: () => dispatch(fetchUserLocationInformation),
  }

}

export class GoogleMapsComponent extends Component {
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
   this.props.fetchUserLocation();
  }

  
  render() {
    const { isLoading, userLat, userLng } = this.props;
    return (
       isLoading
        ? <p>Loading</p>
        : <Map 
        google = {this.props.google}
        className = "map"
        zoom = {10}
        initialCenter = {
          {
            lat: userLat,
            lng: userLng
          }
        }
      >
        {MarkerList({markerData: this.props.markerData})}
      </Map> 
    );
  }
}

const GoogleMapsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoogleMapsComponent);

export default GoogleApiWrapper({
  apiKey: REACT_APP_GOOGLE_MAPS_API_KEY
})(GoogleMapsContainer)
