import { combineReducers } from 'redux';
import { boycottLocations } from './boycottReducer';
import { googleMapsReducer } from './googleMapsReducer';
import { reducer as formReducer } from 'redux-form';
 
export const rootReducer = combineReducers({
    boycottLocations,
    googleMaps: googleMapsReducer,
    form: formReducer,
});
