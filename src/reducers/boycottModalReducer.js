import { MODAL_ACTIONS } from '../actions/boycottModalActions';

export const INITIAL_MODAL_STATE = {
    isActive: false
}

export const boycottModalReducer = (state = INITIAL_MODAL_STATE, action) => {
    switch(action.type) {

        case MODAL_ACTIONS.TOGGLE_MODAL: {
            return {
                ...state,
                isActive: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
