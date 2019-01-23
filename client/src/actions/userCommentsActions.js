import * as Api from "../utilities/Api";

export const FETCH_USER_COMMENTS = "FETCH_USER_COMMENTS";
export const FETCH_USER_COMMENTS_SUCCESS = "FETCH_USER_COMMENTS_SUCCESS";
export const FETCH_USER_COMMENTS_ERROR = "FETCH_USER_COMMENTS_ERROR";

export function getComments(token) {
  return dispatch => {
    dispatch({
      type: FETCH_USER_COMMENTS
    });

    Api.GetUserComments.fetchPost(token)
      .then(items => dispatch(receivePosts(items)))
      .catch(errors =>
        dispatch({ type: FETCH_USER_COMMENTS_ERROR, errors: errors })
      );
  };
}

export function receivePosts(items) {
  const arr = items.comment; //comment

  return {
    type: FETCH_USER_COMMENTS_SUCCESS,
    payload: arr
  };
}
function shouldFetchPost(state) {
  const { isFetching } = state.userComments;
  if (isFetching) {
    return false;
  } else {
    return true;
  }
}
export function fetchIsNeed(token) {
  return (dispatch, getState) => {
    if (shouldFetchPost(getState())) {
      return dispatch(getComments(token));
    }
  };
}
