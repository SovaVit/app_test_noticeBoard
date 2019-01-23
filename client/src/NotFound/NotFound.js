import React from "react";
import { withRouter } from "react-router";
import css from "./NotFound.module.css";

const NotFound = ({ location }) => (
  <div className={css.styles}>
    <h1>Error 404</h1>
    <div>
      Sorry, page{" "}
      <p>
        <strong>{location.pathname}</strong>
      </p>{" "}
      was not found!
    </div>
  </div>
);

export default withRouter(NotFound);
