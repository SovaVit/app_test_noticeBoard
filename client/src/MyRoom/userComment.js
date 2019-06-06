import React from "react";
import PropTypes from "prop-types";
import { RemoveUserComment } from "../utilities/Api";
import { NavLink } from "react-router-dom";
import * as style from "./MyRoom.module.css";

const UserComment = props => {
  const { _id, description, createdAt } = props.data;
  const newDate = () => {
    if (createdAt) {
      let newDate = createdAt.slice(0, 10);
      return newDate;
    }
  };
  const handleRemove = async () => {
    return await RemoveUserComment.fetchPost(_id);
  };
  return (
    <tr>
      <td className={style.my_table_link}>{description}</td>
      <td className={style.my_table_row}>{newDate()}</td>
      <td className={style.my_table_row}>
        <NavLink to={`/myroom/upcomment/${_id}`}>Update</NavLink>
      </td>
      <td className={style.my_table_row}>
        <NavLink to="/myroom/comments" onClick={handleRemove}>
          Remove
        </NavLink>
      </td>
    </tr>
  );
};
UserComment.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  })
};
export default UserComment;
