import {
  FETCH_USER_COMMENTS,
  FETCH_USER_COMMENTS_SUCCESS,
  FETCH_USER_COMMENTS_ERROR
} from "../actions/userCommentsActions";
import { LOGOUT_SUCCESS } from "../actions/userActions";

export const initialSate = {
  userComments: [],
  isFetching: false,
  errors: ""
};
export function userCommentsReducer(state = initialSate, action) {
  switch (action.type) {
    case FETCH_USER_COMMENTS:
      return { ...state, isFetching: true, errors: "" };
    case FETCH_USER_COMMENTS_SUCCESS:
      return {
        ...state,
        userComments: action.payload,
        isFetching: false,
        errors: ""
      };
    case FETCH_USER_COMMENTS_ERROR:
      return { ...state, isFetching: false, errors: action.errors };
    case LOGOUT_SUCCESS:
      return { ...state, userComments: [], isFetching: false, errors: "" };
    default:
      return state;
  }
}
