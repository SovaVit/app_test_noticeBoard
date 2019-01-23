import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./NavBar.module.css";

const NavBar = props => {
  const { isLogged, name } = props;
  return (
    <nav className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <h4>
            Hello {name}
            {"  "}{" "}
          </h4>
        </li>
        <li className={styles.list__item}>
          <NavLink to="/">
            <span>Notices</span>
          </NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink to="/myroom">
            <span>My room</span>
          </NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink to="/login">
            <span>{isLogged === false ? "Log In" : "Log Out"} </span>
          </NavLink>
        </li>
        <li className={styles.list__item}>
          <NavLink to="/registration">
            <span>Sign up </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
function mapStateToProps(state) {
  return {
    isLogged: state.user.isLogged,
    name: state.user.name
  };
}

export default connect(mapStateToProps)(NavBar);
