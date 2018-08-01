import { BOYCOTT_ACTIONS } from '../actions/boycottActions';

const INITIAL_USER_LOCATION = {userLat: 0, userLng: 0};

export const userLocation = (state = INITIAL_USER_LOCATION, action) => {
  switch (action.type) {
    case BOYCOTT_ACTIONS.USER_LOCATION_UPDATE: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
