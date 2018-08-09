import { combineReducers } from 'redux';
import { boycottLocations } from './boycottReducer';
import { googleMapsReducer } from './googleMapsReducer';
import { googlePlacesReducer } from './placesReducer';

export const rootReducer = combineReducers({
    boycottLocations,
    googleMaps: googleMapsReducer,
    googlePlaces: googlePlacesReducer
});
