import { postsReducer, initialSate } from "./page";
import {
  FETCH_ALL_ITEMS,
  FETCH_ALL_ITEMS_SUCCESS,
  FETCH_ALL_ITEMS_ERROR
} from "../actions/pageActions";

describe("dashboard reducer test", () => {
  it("FETCH_ALL_ITEMS", () => {
    const action = {
      type: FETCH_ALL_ITEMS
    };
    expect(postsReducer(initialSate, action)).toEqual({
      ...initialSate,
      isFetching: true,
      showLoadButton: true,
      errors: ""
    });
  });
  it("FETCH_ALL_ITEMS_SUCCESS", () => {
    const action = {
      type: FETCH_ALL_ITEMS_SUCCESS,
      payload: { posts: [1, 2, 3], showLoadButton: true }
    };
    expect(postsReducer(initialSate, action)).toEqual({
      ...initialSate,
      isFetching: false,
      posts: [...initialSate.posts, ...action.payload.posts],
      showLoadButton: action.payload.showLoadButton,
      errors: ""
    });
  });
  it("FETCH_ALL_ITEMS_ERROR", () => {
    const stateB = {
      posts: [],
      isFetching: true,
      showLoadButton: true,
      errors: ""
    };
    const action = {
      type: FETCH_ALL_ITEMS_ERROR,
      errors: "error"
    };
    expect(postsReducer(stateB, action)).toEqual({
      ...stateB,
      isFetching: false,
      errors: action.errors
    });
  });
});
