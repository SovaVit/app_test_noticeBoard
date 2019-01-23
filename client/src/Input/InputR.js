import React from "react";
import CSS from "./InputR.module.css";

export const Input = ({ input, label, meta }) => (
  <div className={CSS.Input}>
    <label>{label}</label>
    <input {...input} type="text" placeholder={input.name} />
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
);
