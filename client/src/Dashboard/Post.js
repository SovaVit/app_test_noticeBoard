import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import p from "./Post.module.css";

const Post = props => {
  const { id, name, title, receivedAt } = props.data;

  return (
    <div className={p.Post}>
      <h3>
        <i>Name: </i> {name}
      </h3>
      <Link className={p._link} to={`/${id}`}>
        {title}
      </Link>

      <p>{receivedAt}</p>
    </div>
  );
};
Post.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    receivedAt: PropTypes.string.isRequired
  })
};
export default Post;
