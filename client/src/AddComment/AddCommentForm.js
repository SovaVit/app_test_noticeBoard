import React from "react";
import { Input } from "../Input/InputR";
import { Textarea } from "../Textarea/TextareaR";
import { Form, Field } from "react-final-form";
import * as V from "../utilities/FieldLevelValidationForm";
import CSS from './Comment.module.css'

const AddCommentForm = props => {
  return (
    <Form
      onSubmit={props.onSubmit}
      render={({
        handleSubmit,
        reset,
        submitting,
        pristine,
        submitError,
        submitSucceeded
      }) => (
        <form className= {CSS.form} 
        onSubmit={handleSubmit}>

          <Field
            name="email"
            label="E-mail"
            validate={V.composeValidations(V.required, V.email)}
          >
            {Input}
          </Field>
          <Field name="body" label="Post" validate={V.required}>
            {Textarea}
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
              <span>Your comment has been sent!</span>
            </div>
          )}
        </form>
      )}
    />
  );
};
export default AddCommentForm;
