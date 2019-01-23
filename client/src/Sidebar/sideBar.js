import React from "react";
import { Link } from "react-router-dom";
import * as style from "./sideBar.module.css";

const SideBar = props => {
  return (
    <div className={style.sidenav}>
      <Link className={style.sidelink} to="/myroom/posts">
        My posts
      </Link>

      <Link className={style.sidelink} to="/myroom/comments">
        My comments{" "}
      </Link>

      <Link className={style.sidelink} to="/myroom/addpost">
        New Post
      </Link>
    </div>
  );
};

export default SideBar;
