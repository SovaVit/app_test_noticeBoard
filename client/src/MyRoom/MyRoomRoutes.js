import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AddPostContainer from "../AddPost/AddPostContainer";
import MyRoomPosts from "./MyRoomPosts";
import MyRoomComments from "./MyRoomComments";
import UpdatePost from "../UpdatePost/updatePost";
import UpdateComment from "../UpdateComment/updateComment";

const MyRoomRoutes = () => (
  <Switch>
    <Redirect exact from={"/myroom"} to={"/myroom/posts"} />
    <Route exact path="/myroom/posts" component={MyRoomPosts} />
    <Route path="/myroom/comments" component={MyRoomComments} />
    <Route path="/myroom/addpost" component={AddPostContainer} />
    <Route path="/myroom/uppost/:id" component={UpdatePost} />
    <Route path="/myroom/upcomment/:id" component={UpdateComment} />
  </Switch>
);
export default MyRoomRoutes;
