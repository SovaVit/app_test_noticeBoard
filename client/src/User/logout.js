import React from "react";
import s from "./User.module.css";

export class Logout extends React.Component {
  render() {
    return (
      <div className={s.modal}>
        <button className={s.close} onClick={this.props.handleClose}>
          X
        </button>
        <p>Go out?</p>
        <button onClick={this.props.handleLogout}>Exit</button>
        <div> {this.props.ERRORS.error && "Server Error"}</div>
      </div>
    );
  }
}
export default Logout;
