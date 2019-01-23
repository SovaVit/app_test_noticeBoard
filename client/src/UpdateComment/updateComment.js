import React from "react";
import { connect } from "react-redux";
import UpdateCommentForm from "./UpdateCommentForm";
import * as Api from "../utilities/Api";
import { FORM_ERROR } from "final-form";

class UpdateComment extends React.Component {
  state = { initialValues: {} };
  componentDidMount() {
    const { id } = this.props.match.params;
    const comment = this.props.userComments.find(element => {
      return element._id === id;
    });
    this.setState({
      initialValues: { description: comment.description }
    });
  }

  submitForm = async value => {
    const { id } = this.props.match.params;
    const data = JSON.stringify({
      description: value.description
    });
    try {
      await Api.UpdateComment.fetchPost(id, data);
      return this.props.history.push("/myroom/comments");
    } catch (errors) {
      return {
        [FORM_ERROR]: "Error occurred during update" 
      };
    }
  };
  render() {
    return (
      <UpdateCommentForm
        onSubmit={this.submitForm.bind(this)}
        initialValues={this.state.initialValues}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    userComments: state.userComments.userComments
  };
};

export default connect(mapStateToProps)(UpdateComment);
