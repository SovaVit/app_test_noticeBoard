import * as Api from "../utilities/Api";

export const FETCH_SEARCH_ITEMS = "FETCH_SEARCH_ITEMS";
export const FETCH_SEARCH_ITEMS_SUCCESS = "FETCH_SEARCH_ITEMS_SUCCESS";
export const FETCH_SEARCH_ITEMS_ERROR = "FETCH_SEARCH_ITEMS_ERROR";
export const RESET_STATE = "RESET_STATE";

export function getSearch(start, search) {
  return dispatch => {
    dispatch({
      type: FETCH_SEARCH_ITEMS
    });

    Api.SearchPosts.fetchPosts(start, search)
      .then(items => dispatch(receivePosts(items)))
      .catch(errors =>
        dispatch({ type: FETCH_SEARCH_ITEMS_ERROR, errors: errors })
      );
  };
}
export function resetState () {
  return{
    type: RESET_STATE,
  }
}
export function receivePosts(items) {
  const arr = items.post;
  return {
    type: FETCH_SEARCH_ITEMS_SUCCESS,
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
  if (items.length === 50 ) {
    return {
      posts: ItemsMapping(items),
      showLoadButton: true
    };
  }
  if (items.length < 50 ) {
    return {
      posts: ItemsMapping(items),
      showLoadButton: false
    };
  }
}
