import * as GOOGLE_PLACES_ACTIONS from '../actions/placesActions';

export const INITIAL_GOOGLE_PLACES_STATE = {
    placesLoading: false,
    nearbyPlaces: [],
    searchedPlaces: [],
    error: '',
    establishmentInformation: {name : null},
    loadingInformation: false
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
        case GOOGLE_PLACES_ACTIONS.FETCH_ESTABLISHMENT_INFORMATION: {
          return {
            ...state,
            loadingInformation: true
          }
        }
        case GOOGLE_PLACES_ACTIONS.FETCH_ESTABLISHMENT_INFORMATION_SUCCESS: {
          return {
            ...state,
            loadingInformation: false,
            establishmentInformation: action.payload
          }
        }
        case GOOGLE_PLACES_ACTIONS.FETCH_ESTABLISHMENT_INFORMATION_ERROR: {
          return {
            ...state,
            loadingInformation: false,
            establishmentInformation: {name: null},
            error: action.payload
          }
        }
        case GOOGLE_PLACES_ACTIONS.CLEAR_STORE_ESTABLISHMENT: {
          return {
            ...state,
            establishmentInformation: {name : null}
          }
        }
        default: {
            return state;
        }
    }
}
