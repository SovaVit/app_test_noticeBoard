import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../actions/userActions";

export const initialSate = {
  name: "Guest",
  isLogged: false,
  token: null,
  error: ""
};
export function userReducer(state = initialSate, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        isLogged: action.payload.isLogged,
        token: action.payload.token,
        error: ""
      };
    case LOGOUT_SUCCESS:
      return { ...state, isLogged: false, name:'Guest',token: null, error: "" };

    default:
      return state;
  }
}
