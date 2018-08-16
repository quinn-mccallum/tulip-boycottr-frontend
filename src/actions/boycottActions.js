import axios from 'axios';

import { API_BASE_URL } from '../api/config'


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

export const createBoycott = (values, address, lat, lng, name) => dispatch => {
  axios.post(`${API_BASE_URL}/boycotts/boycottLocation`, {
          reasons: values,
          lat,
          lng,
          name,
          address
        })
       .then(res => {
         console.log(res);
         // dispatch({
         //   type: BOYCOTT_ACTIONS.REQUEST_SUCCESS,
         //   payload: res.data
         // })
       })
       .catch(err => {
         console.log(err);
       })
}

export const updateBoycotts = (values) => (dispatch) => {
  //update all boycott data from form input
  axios.post(`${API_BASE_URL}/boycotts/updateBoycotts`,{
    data: values
  })
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
