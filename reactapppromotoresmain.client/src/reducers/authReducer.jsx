import { SET_CURRENT_USER } from "../actions/types";

const initialState = { loggedIn: false, user: {}, tipoUser: 0 };

export default function authReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                loggedIn: payload.loggedIn,
                user: payload.user,
                tipoUser: payload.tipoUser
            }
        default:
            return state;
    }
}