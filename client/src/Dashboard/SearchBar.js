import React from "react";
import { Input } from "../Input/InputR";
import { Form, Field } from "react-final-form";
import css from "./SearchBar.module.css";

const SearchBar = props => {
  return (
    <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <Field name="Search" placeholder="Search for...">
            {Input}
          </Field>
          <button type="submit" disabled={submitting}>
            Search
          </button>
        </form>
      )}
    />
  );
};

export default SearchBar;
