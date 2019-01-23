import {
  FETCH_USER_POSTS,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_ERROR,
} from "../actions/userPotsActions";
import {LOGOUT_SUCCESS} from '../actions/userActions'

export const initialSate = {
  userPosts: [],
  isFetching: false,
  errors: ""
};
export function userPostsReducer(state = initialSate, action) {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return { ...state, isFetching: true, errors: "" };
    case FETCH_USER_POSTS_SUCCESS:
      return {
        ...state,
        userPosts: action.payload,
        isFetching: false,
        errors: ""
      };
    case FETCH_USER_POSTS_ERROR:
      return { ...state, isFetching: false, errors: action.errors };
    case LOGOUT_SUCCESS:
      return { ...state, userPosts: [], isFetching: false, errors: "" };
    default:
      return state;
  }
}
