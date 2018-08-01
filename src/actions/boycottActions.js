// export const POKEMON_ACTIONS = {
//     SET_IS_LOADING: 'pokemon/SET_IS_LOADING',
//     SET_POKEMON: 'pokemon/SET_POKEMON',
//   };

export const BOYCOTT_ACTIONS ={
    REQUEST_SUCCESS: "BOYCOTT_REQUEST_SUCCESS",
    REQUEST: "BOYCOTT_REQUEST",
    USER_LOCATION_UPDATE: "USER_LOCATION_UPDATE",
}

export const loadBoycotts = (dispatch) => {
  //fetch all boycott data from our API endpoint
  fetch('http://localhost:8081/boycotts/boycottLocation')
   .then(res => res.json())
   .then(data => {
     dispatch({
       type: BOYCOTT_ACTIONS.REQUEST_SUCCESS,
       payload: data
     })
   })
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
