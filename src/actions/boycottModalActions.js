export const MODAL_ACTIONS = {
    TOGGLE_MODAL: "TOGGLE_MODAL",
}

export const toggleModal = modalState => {
    return {
        type: MODAL_ACTIONS.TOGGLE_MODAL,
        payload: modalState
    }
}
