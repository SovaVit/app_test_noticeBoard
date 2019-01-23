import * as Api from "../utilities/Api";
export const FETCH_USER_POSTS = "FETCH_USER_POSTS";
export const FETCH_USER_POSTS_SUCCESS = "FETCH_USER_POSTS_SUCCESS";
export const FETCH_USER_POSTS_ERROR = "FETCH_USER_POSTS_ERROR";


export function getPosts(token) {
  return dispatch => {
    dispatch({
      type: FETCH_USER_POSTS
    });

    Api.GetUserPosts.fetchPost(token)
      .then(items => dispatch(receivePosts(items)))
      .catch(errors =>
        dispatch({ type: FETCH_USER_POSTS_ERROR, errors: errors })
      );
  };
}

function receivePosts(items) {
  const arr = items.post;

  return {
    type: FETCH_USER_POSTS_SUCCESS,
    payload: ItemsMapping(arr)
  };
}


function ItemsMapping(items) {
  const posts = items.map(item => ({
    id: item._id,
    name: item.name,
    title: item.title,
    body: item.description,
    receivedAt: item.createdAt.slice(0, 10),
    createdBy: item.createdBy
  }));
  return posts;
}
function shouldFetchPost(state) {
  const {isFetching} = state.userPosts;
  if (isFetching) {
    return false;
  } else {
    return true;
  }
}
export function fetchIsNeed(token) {
  return (dispatch, getState) => {
    if (shouldFetchPost(getState())) {
      return dispatch(getPosts(token));
    }
  };
}

