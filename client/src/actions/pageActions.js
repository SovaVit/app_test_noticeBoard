import * as Api from "../utilities/Api";

export const FETCH_ALL_ITEMS = "FETCH_ALL_ITEMS";
export const FETCH_ALL_ITEMS_SUCCESS = "FETCH_ALL_ITEMS_SUCCESS";
export const FETCH_ALL_ITEMS_ERROR = "FETCH_ALL_ITEMS_ERROR";

export function getPosts(start) {
  return dispatch => {
    dispatch({
      type: FETCH_ALL_ITEMS
    });

    Api.AllPosts.fetchPosts(start)
      .then(items => dispatch(receivePosts(items)))
      .catch(errors =>
        dispatch({ type: FETCH_ALL_ITEMS_ERROR, errors: errors })
      );
  };
}

export function receivePosts(items) {
  const arr = items.post;
  return {
    type: FETCH_ALL_ITEMS_SUCCESS,
    payload: PushItems(arr)
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
function PushItems(items) {
  if (items.length === 50) {
    return {
      posts: ItemsMapping(items),
      showLoadButton: true
    };
  }
  if (items.length < 50) {
    return {
      posts: ItemsMapping(items),
      showLoadButton: false
    };
  }
}

function shouldFetchPost(state, start) {
  const posts = state.page.posts;
  if (posts.length === 0) {
    return true;
  } else if (posts.length <= start) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return false;
  }
}
export function fetchIsNeed(start) {
  return (dispatch, getState) => {
    if (shouldFetchPost(getState(), start)) {
      return dispatch(getPosts(start));
    }
  };
}
