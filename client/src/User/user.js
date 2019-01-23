import React from "react";
import s from "./User.module.css";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import * as V from "../utilities/FieldLevelValidationForm";
import { Input } from "../Input/InputR";

export class User extends React.Component {
  render() {
    return (
      <div className={s.modal}>
        <button className={s.close} onClick={this.props.handleClose}>
          X
        </button>
        <p>Hello !</p>
        <p>Please enter your username and password!</p>

        <Form
          onSubmit={this.props.handleSubmit}
          render={({
            handleSubmit,
            reset,
            submitting,
            pristine,
            submitError
          }) => (
            <form className={s.form} onSubmit={handleSubmit}>
              <Field
                name="email"
                validate={V.composeValidations(V.email, V.required)}
              >
                {Input}
              </Field>
              <Field
                name="password"
                validate={V.composeValidations(V.required, V.minLength6)}
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
                {submitError && <div>{submitError}</div>}
              </div>
            </form>
          )}
        />
        <Link to="/registration">Sign up...</Link>
      </div>
    );
  }
}
