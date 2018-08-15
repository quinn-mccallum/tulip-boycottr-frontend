import { combineReducers } from 'redux';
import { boycottLocations } from './boycottReducer';
import { googleMapsReducer } from './googleMapsReducer';
import { googlePlacesReducer } from './placesReducer';
import { reducer as formReducer } from 'redux-form';
import { boycottModalReducer } from './boycottModalReducer';

export const rootReducer = combineReducers({
    boycottLocations,
    googleMaps: googleMapsReducer,
    googlePlaces: googlePlacesReducer,
    modal: boycottModalReducer,
    form: formReducer
});
