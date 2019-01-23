import React from "react";
import { connect } from "react-redux";
import AddPostForm from "./AddPostForm";
import * as Api from "../utilities/Api";
import { FORM_ERROR } from "final-form";
import * as css from "./post.module.css";

const AddPostPage = props => {
  const { name, token } = props;

  async function submitForm(value, form) {
    const data = JSON.stringify({
      name: name,
      title: value.title,
      description: value.description
    });
    try {
      await Api.AddPost.fetchPost(data, token);
      return form.reset();
    } catch (errors) {
      return {
        [FORM_ERROR]: errors
      };
    }
  }
  return (
    <div className={css.container}>
      <h4>Write your own post...</h4>
      <AddPostForm onSubmit={submitForm} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    token: state.user.token,
    name: state.user.name
  };
};
export default connect(mapStateToProps)(AddPostPage);
