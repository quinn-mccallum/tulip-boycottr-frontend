import { GOOGLE_MAPS_ACTIONS } from '../actions/googleMapsActions';

export const INITIAL_GOOGLE_MAPS_STATE = {
    userLat: null,
    userLng: null,
    isLoading: true,
    error: '',
};

export const googleMapsReducer = (state = INITIAL_GOOGLE_MAPS_STATE, action = {}) => {
    switch(action.type) {
        case GOOGLE_MAPS_ACTIONS.FETCH_LOCATION: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GOOGLE_MAPS_ACTIONS.SET_LOCATION: {
            return {
                ...state,
                userLat: action.payload.userLat,
                userLng: action.payload.userLng,
                isLoading: false,
            }
        }
        case GOOGLE_MAPS_ACTIONS.FETCH_LOCATION_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}