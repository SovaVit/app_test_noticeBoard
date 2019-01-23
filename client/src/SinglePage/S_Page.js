import React from "react";
import { PropTypes } from "prop-types";
import CSS from "./S_Page.module.css";

const Page = props => {
  const newDate = () => {
    const { createdAt } = props.data;
    if (createdAt) {
      let newDate = createdAt.slice(0, 10) + " " + createdAt.slice(11, 16);
      return newDate;
    }
  };

  if (props.data === null) {
    return <div>Unfortunately there are no post!</div>;
  } else {
    const { name, title, description } = props.data;
    return (
      <table>
        <tbody>
          <tr className={CSS.post}>
            <td className={CSS.author}>
              Author:
              <br />
              <b> {name}</b>
              <br />
              {newDate()}
            </td>
            <td className={CSS.post_text}>
              <b>Theme:</b>
              <p>{title}</p>
              <b>Description:</b> <p>{description}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
};
Page.propTypes = {
  data: PropTypes.object.isRequired
};
export default Page;
