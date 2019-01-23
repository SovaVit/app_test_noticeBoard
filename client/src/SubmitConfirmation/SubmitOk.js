import React from "react";
import { Link } from "react-router-dom";

export const SubmitOk = () => {
    return (
      <div>
        <p>Ваш пост надіслано!!!</p>
        <Link to="/">
          <span>Dashboard</span>
        </Link>
      </div>
    );
}

