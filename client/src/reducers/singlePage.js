import {
  FETCH_COMMENTS_BY_ID,
  FETCH_COMMENTS_BY_ID_SUCCESS,
  FETCH_COMMENTS_BY_ID_ERROR
} from "../actions/singlePageActions";

export const initialSate = {
  post: {},
  comments: [],
  isFetching: false,
  errors: ""
};
export function commentsReducer(state = initialSate, action) {
  switch (action.type) {
    case FETCH_COMMENTS_BY_ID:
      return { ...state, isFetching: true, errors: "" };
    case FETCH_COMMENTS_BY_ID_SUCCESS:
      return {
        ...state,
        comments: action.payload2,
        post: action.payload,
        isFetching: false,
      };
    case FETCH_COMMENTS_BY_ID_ERROR:
      return { ...state, isFetching: false, errors: action.errors };
    default:
      return state;
  }
}
