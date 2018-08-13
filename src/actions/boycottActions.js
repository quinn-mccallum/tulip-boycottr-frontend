import axios from 'axios';

import { API_BASE_URL } from '../api/config'

// export const POKEMON_ACTIONS = {
//     SET_IS_LOADING: 'pokemon/SET_IS_LOADING',
//     SET_POKEMON: 'pokemon/SET_POKEMON',
//   };

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const BOYCOTT_ACTIONS ={
    REQUEST_SUCCESS: "BOYCOTT_REQUEST_SUCCESS",
    REQUEST: "BOYCOTT_REQUEST",
    USER_LOCATION_UPDATE: "USER_LOCATION_UPDATE",
}

export const loadBoycotts = (dispatch) => {
  //fetch all boycott data from our API endpoint
  fetch(`${API_BASE_URL}/boycotts/boycottLocation`)
   .then(res => res.json())
   .then(data => {
     dispatch({
       type: BOYCOTT_ACTIONS.REQUEST_SUCCESS,
       payload: data
     })
   })
   .catch( err => console.log(err));
}

export const updateBoycotts = (values) => (dispatch) => {
  //update all boycott data from form input
  axios.post(`${API_BASE_URL}/boycotts/updateBoycotts`,{
    data: values
  })
   .then(res => res.json())
   .then(res => console.log(res))
   .then(data => {
     dispatch({
       type: BOYCOTT_ACTIONS.REQUEST_SUCCESS,
       payload: data
     })
   })
   .catch( err => console.log(err));
}

export const updateUserLocation = (dispatch) => {

  const success = (pos) => {
    dispatch({
      type: BOYCOTT_ACTIONS.USER_LOCATION_UPDATE,
      payload: {userLat: pos.coords.latitude, userLng: pos.coords.longitude}
    })
  }
  navigator.geolocation.getCurrentPosition(success)
}
