import { combineReducers } from 'redux';
import { boycottLocations } from './boycottReducer';
import { googleMapsReducer } from './googleMapsReducer';

export const rootReducer = combineReducers({
    boycottLocations,
    googleMaps: googleMapsReducer,
});
