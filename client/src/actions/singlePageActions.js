import * as Api from "../utilities/Api";
export const FETCH_COMMENTS_BY_ID = "FETCH_COMMENTS_BY_ID";
export const FETCH_COMMENTS_BY_ID_SUCCESS = "FETCH_COMMENTS_BY_ID_SUCCESS";
export const FETCH_COMMENTS_BY_ID_ERROR = "FETCH_COMMENTS_BY_ID_ERROR";

export function getPostComments(id) {
  
  return dispatch => {
    dispatch({ type: FETCH_COMMENTS_BY_ID });
    Api.PostById.fetchPost(id)
      .then(([item, comments]) =>
        dispatch(receivePosts(item.post, comments.comment))
      )
      .catch(errors =>
        dispatch({ type: FETCH_COMMENTS_BY_ID_ERROR, errors: errors })
      );
  };
}

export function receivePosts(item, comments) {
  return {
    type: FETCH_COMMENTS_BY_ID_SUCCESS,
    payload: item,
    payload2: comments
  };
}
