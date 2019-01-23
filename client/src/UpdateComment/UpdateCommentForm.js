import React from "react";
import { Textarea } from "../Textarea/TextareaR";
import { Form, Field } from "react-final-form";
import * as V from "../utilities/FieldLevelValidationForm";
import CSS from '../AddComment/Comment.module.css'

const UpdateCommentForm = props => {
  return (
    <Form
      onSubmit={props.onSubmit}
      initialValues={props.initialValues}
      render={({
        handleSubmit,
        values,
        reset,
        submitting,
        pristine,
        submitError,
        submitSucceeded
      }) => (
        <form className= {CSS.form} 
        onSubmit={handleSubmit}>
          <Field name="description" label="Post" validate={V.required}>
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
export default UpdateCommentForm;