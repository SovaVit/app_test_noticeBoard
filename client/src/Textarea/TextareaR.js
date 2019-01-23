import React from "react";
import CSS from "./TextareaR.module.css";

export const Textarea = ({ input, label, meta }) => (
  <div className={CSS.Input}>
    <label>{label}</label>
    <textarea {...input} type="text" placeholder={input.name} />
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
);
