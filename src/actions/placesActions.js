/*
  Package Imports:
*/
import axios from 'axios';
/*
  Type Definitions:
*/
export const FETCH_NEARBY_PLACES = 'FETCH_NEARBY_PLACES';
export const SET_NEARBY_PLACES = 'SET_NEARBY_PLACES';
export const FETCH_NEARBY_PLACES_ERROR = 'FETCH_NEARBY_PLACES_ERROR';

export const FETCH_SEARCHED_PLACES = 'FETCH_SEARCHED_PLACES';
export const SET_SEARCHED_PLACES = 'SET_SEARCHED_PLACES';
export const FETCH_SEARCHED_PLACES_ERROR = 'FETCH_SEARCHED_PLACES_ERROR';

/*
  Action Creators
*/

export const fetchNearbyPlaces = (lat, lng) => {
  return (dispatch, getState) => {
    const { nearbyPlaces } = getState().googlePlaces;
    if(nearbyPlaces.length === 0){
      dispatch({type: FETCH_NEARBY_PLACES});
      fetch(`http://localhost:8081/boycotts/nearby/${lat}&${lng}`)
        .then(res=>res.json())
        .then(data=>{
          const nearbyArray = data.json.results.map(place=>{
            return {
              name: place.name,
              location: place.geometry.location,
              address: place.vicinity,
            }
          });
          dispatch({type: SET_NEARBY_PLACES, payload: nearbyArray});
        })
        .catch(err=>{
          dispatch({type: FETCH_NEARBY_PLACES_ERROR, payload: err});
        })
    }
    else {
      return null
    }
  }
}

export const fetchSearchedPlaces = searchTerm => {
  return (dispatch, getState) => {
    const { userLat, userLng } = getState().googleMaps;
    dispatch({type: FETCH_SEARCHED_PLACES});
    axios.get(`http://localhost:8081/boycotts/places?place=${searchTerm}&lat=${userLat}&lng=${userLng}`)
      .then(res=>{
        dispatch({type: SET_SEARCHED_PLACES, payload: res.data.predictions})
      })
      .catch(err=>{
        console.log('WE HIT THE CATCH BLOCK WITH: ', err);
        dispatch({type: FETCH_SEARCHED_PLACES_ERROR, payload: err});
      })
  }
};
