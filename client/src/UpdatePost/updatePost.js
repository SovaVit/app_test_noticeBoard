import React from "react";
import { connect } from "react-redux";
import AddPostForm from "../AddPost/AddPostForm";
import * as Api from "../utilities/Api";
import { FORM_ERROR } from "final-form";

class UpdatePost extends React.Component {
  state = { initialValues: {} };
  componentDidMount() {
    const { id } = this.props.match.params;
    const post = this.props.userPosts.find(element => {
      return element.id === id;
    });
    this.setState({
      initialValues: { title: post.title, description: post.body }
    });
  }

  submitForm = async value => {
    const { id } = this.props.match.params;
    const data = JSON.stringify({
      title: value.title,
      description: value.description
    });
    try {
      await Api.UpdatePost.fetchPost(id, data);
      return this.props.history.push("/myroom/posts");
    } catch (errors) {
      return {
        [FORM_ERROR]: "Error occurred during update"
      };
    }
  };
  render() {
    return (
      <AddPostForm
        onSubmit={this.submitForm.bind(this)}
        initialValues={this.state.initialValues}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    userPosts: state.userPosts.userPosts
  };
};

export default connect(mapStateToProps)(UpdatePost);
