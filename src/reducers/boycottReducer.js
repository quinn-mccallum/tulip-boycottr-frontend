import { BOYCOTT_ACTIONS } from '../actions/boycottActions'

const INITIAL_BOYCOTT_LOCATIONS = [];

export const boycottLocations = (state = INITIAL_BOYCOTT_LOCATIONS, action) => {
  switch (action.type) {
    case BOYCOTT_ACTIONS.REQUEST_SUCCESS : {
      return action.payload;
    }

    default :return state;
  }
}
