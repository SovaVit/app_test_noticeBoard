import {
  FETCH_ALL_ITEMS,
  FETCH_ALL_ITEMS_SUCCESS,
  FETCH_ALL_ITEMS_ERROR
} from "../actions/pageActions";

export const initialSate = {
  posts: [],
  isFetching: false,
  showLoadButton: true,
  errors: ""
};
export function postsReducer(state = initialSate, action) {
  switch (action.type) {
    case FETCH_ALL_ITEMS:
      return { ...state, isFetching: true, showLoadButton: true, errors: "" };
    case FETCH_ALL_ITEMS_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload.posts],
        showLoadButton: action.payload.showLoadButton,
        isFetching: false,
        errors: ""
      };
    case FETCH_ALL_ITEMS_ERROR:
      return { ...state, isFetching: false, errors: action.errors };
    default:
      return state;
  }
}

// function UniquePosts(oldArray, newArray) {
//   let myArray = oldArray.concat(newArray);
//   let unique = [];
//   myArray.filter(function(item){
//     let i = unique.findIndex(x => x.id === item.id);
//     if(i <= -1){
//       unique.push(item);
//     }
//     return null;
//   }); 
//   return unique;
// }
