import React from "react";
import { PropTypes } from "prop-types";
import CSS from "./Comment.module.css";

const Comment = props => {
  const { name, email, description, createdAt } = props.data;
  const newDate = () => {
    if (createdAt) {
      let newDate = createdAt.slice(0, 10) + " " + createdAt.slice(11, 16);
      return newDate;
    }
  };

  return (
    <div className={CSS.article}>
      <div className={CSS.author}>
        <h6>
          Author: <b>{name}</b>
          <br />
          Date: <b>{newDate()}</b>
          <br />
          e-mail: {email}
        </h6>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};
Comment.propTypes = {
  data: PropTypes.object.isRequired
};
export default Comment;
