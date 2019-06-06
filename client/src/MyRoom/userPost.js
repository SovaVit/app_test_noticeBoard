import React from "react";
import PropTypes from "prop-types";
import { RemoveUserPost } from "../utilities/Api";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import * as style from "./MyRoom.module.css";

const UserPost = props => {
  const { id, title, receivedAt } = props.data;

  const handleRemove = async () => {
    return await RemoveUserPost.fetchPost(id);
  };

  return (
    <tr>
      <td className={style.my_table_link}>
        <Link to={`/${id}`}>{title}</Link>
      </td>
      <td className={style.my_table_row}>{receivedAt}</td>
      <td className={style.my_table_row}>
        <NavLink to={`/myroom/uppost/${id}`}>Update</NavLink>
      </td>
      <td className={style.my_table_row}>
        <NavLink to="/myroom/post" onClick={handleRemove}>
          Remove
        </NavLink>
      </td>
    </tr>
  );
};
UserPost.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    receivedAt: PropTypes.string.isRequired
  })
};
export default UserPost;
