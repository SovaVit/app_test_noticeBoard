import React from "react";
import { connect } from "react-redux";
import AddCommentForm from "./AddCommentForm";
import * as Api from "../utilities/Api";
import { FORM_ERROR } from "final-form";

const AddCommentContainer = props => {
  const { id, name, token } = props;
  async function submitComment(value, form) {
    const data = JSON.stringify({
      postId: id,
      name: name,
      email: value.email,
      description: value.body
    });
    try {
      await Api.AddComments.fetchComment(data, token);
      return form.reset();
    } catch (errors) {
      return {
        [FORM_ERROR]: errors
      };
    }
  }
  return <AddCommentForm onSubmit={submitComment} />;
};
const mapStateToProps = state => {
  return {
    token: state.user.token,
    name: state.user.name
  };
};
export default connect(mapStateToProps)(AddCommentContainer);
