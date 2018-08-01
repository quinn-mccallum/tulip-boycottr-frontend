export const GOOGLE_MAPS_ACTIONS = {
    FETCH_LOCATION: 'google-maps/FETCH_LOCATION',
    SET_LOCATION: 'google-maps/SET_LOCATION',
    FETCH_LOCATION_ERROR: 'google-maps/FETCH_LOCATION_ERROR',
}

const getGeolocationFromNavigator = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        (position) => resolve(position.coords),
        (error) => reject(error),
    )
})

export const fetchUserLocationInformation = dispatch => {
    dispatch({ type: GOOGLE_MAPS_ACTIONS.FETCH_LOCATION });
    getGeolocationFromNavigator()
        .then(coords => dispatch({
            type: GOOGLE_MAPS_ACTIONS.SET_LOCATION,
            payload: {
                userLat: coords.latitude,
                userLng: coords.longitude,
        }}))
        .catch(error => dispatch({
            type: GOOGLE_MAPS_ACTIONS.FETCH_LOCATION_ERROR,
            payload: 'OOPS! WE DONE GOOFED',
        }))
}