import React from "react";
import { Input } from "../Input/InputR";
import { Form, Field } from "react-final-form";
import * as V from "../utilities/FieldLevelValidationForm";
import s from "./User.module.css";

const AddUserForm = props => {
  return (
    <div className={s.modal}>
      <button className={s.close} onClick={props.handleClose}>
        X
      </button>
      <p className={s.text}>Please enter your details!</p>
      <Form
        onSubmit={props.handleSubmit}
        render={({
          handleSubmit,
          reset,
          submitting,
          pristine,
          submitError,
          submitSucceeded
        }) => (
          <form className={s.form} onSubmit={handleSubmit}>
            <Field
              name="login"
              label="Name"
              validate={V.composeValidations(V.required, V.minLength2)}
            >
              {Input}
            </Field>
            <Field
              name="password"
              label="Password"
              validate={V.composeValidations(V.required, V.minLength6)}
            >
              {Input}
            </Field>
            <Field
              name="email"
              label="Email"
              validate={V.composeValidations(V.email, V.required)}
            >
              {Input}
            </Field>
            <div>
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button
                type="button"
                onClick={reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            {submitError && <div>{submitError}</div>}
            {submitSucceeded && (
              <div>
                <span>Registration has been successful!</span>
              </div>
            )}
          </form>
        )}
      />
    </div>
  );
};
export default AddUserForm;
