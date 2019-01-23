import {
  FETCH_SEARCH_ITEMS,
  FETCH_SEARCH_ITEMS_SUCCESS,
  FETCH_SEARCH_ITEMS_ERROR,
  RESET_STATE
} from "../actions/searchActions";

export const initialSate = {
  posts: [],
  isFetching: false,
  showLoadButton: true,
  errors: ""
};
export function searchReducer(state = initialSate, action) {
  switch (action.type) {
    case FETCH_SEARCH_ITEMS:
      return { ...state, isFetching: true, showLoadButton: true, errors: "" };
    case FETCH_SEARCH_ITEMS_SUCCESS:
      return {
        ...state,
        posts: UniquePosts(state.posts, action.payload.posts),
        showLoadButton: action.payload.showLoadButton,
        isFetching: false,
        errors: ""
      };
    case FETCH_SEARCH_ITEMS_ERROR:
      return { ...state, isFetching: false, errors: action.errors };
      case RESET_STATE:
      return{...state, posts: [], isFetching: true, showLoadButton: true, errors: ""};
    default:
      return state;
  }
}

function UniquePosts(oldArray, newArray) {
  let myArray = oldArray.concat(newArray);
  let unique = [];
  myArray.filter(function(item) {
    let i = unique.findIndex(x => x.id === item.id);
    if (i <= -1) {
      unique.push(item);
    }
    return null;
  });
  return unique;
}
