import * as GOOGLE_PLACES_ACTIONS from '../actions/placesActions';

export const INITIAL_GOOGLE_PLACES_STATE = {
    placesLoading: false,
    nearbyPlaces: [],
    searchedPlaces: [],
    error: '',
};

export const googlePlacesReducer = (state = INITIAL_GOOGLE_PLACES_STATE, action = {}) => {
    switch(action.type) {
        case GOOGLE_PLACES_ACTIONS.FETCH_NEARBY_PLACES: {
            return {
                ...state,
                placesLoading: true,
            }
        }
        case GOOGLE_PLACES_ACTIONS.SET_NEARBY_PLACES: {
            return {
                ...state,
                nearbyPlaces: action.payload,
                placesLoading: false,
            }
        }
        case GOOGLE_PLACES_ACTIONS.FETCH_NEARBY_PLACES_ERROR: {
            return {
                ...state,
                placesLoading: false,
                error: action.payload,
            }
        }
        case GOOGLE_PLACES_ACTIONS.FETCH_SEARCHED_PLACES: {
          return {
            ...state,
            placesLoading: true,
          }
        }
        case GOOGLE_PLACES_ACTIONS.SET_SEARCHED_PLACES: {
          return {
            ...state,
            searchedPlaces: action.payload,
            placesLoading: false,
          }
        }
        case GOOGLE_PLACES_ACTIONS.FETCH_SEARCHED_PLACES_ERROR: {
          return {
            ...state,
            placesLoading: false,
            error: action.payload,
          }
        }
        default: {
            return state;
        }
    }
}
