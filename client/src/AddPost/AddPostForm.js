import React from "react";
import { Input } from "../Input/InputR";
import { Textarea } from "../Textarea/TextareaR";
import { Form, Field } from "react-final-form";
import * as V from "../utilities/FieldLevelValidationForm";
import * as css from "./post.module.css";


const AddPostForm = props => {

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
        <form className={css.form} onSubmit={handleSubmit}>
          <Field
            name="title"
            label="Theme"
            validate={V.composeValidations(
              V.required,
              V.maxLength200,
              V.minLength20
            )}
          >
            {Input}
          </Field>
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
              <span>Your post has been sent!</span>
            </div>
          )}
        </form>
      )}
    />
  );
};
export default AddPostForm;
