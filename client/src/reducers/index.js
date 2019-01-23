import { combineReducers } from "redux";
import { postsReducer } from "./page";
import { userReducer } from "./user";
import { searchReducer } from "./search";
import { userPostsReducer } from "./userPosts";
import { userCommentsReducer } from "./userComments";

import { commentsReducer } from "./singlePage";

export const rootReducer = combineReducers({
  page: postsReducer,
  user: userReducer,
  postById: commentsReducer,
  search: searchReducer,
  userPosts: userPostsReducer,
  userComments: userCommentsReducer
});
