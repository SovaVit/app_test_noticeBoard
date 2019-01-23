import React from "react";
import { connect } from "react-redux";
import { getPostComments } from "../actions/singlePageActions";
import Page from "./S_Page";
import Comment from "./Comment";
import AddCommentContainer from "../AddComment/AddCommentContainer";
import NotFound from "../NotFound/NotFound";
import AppLoader from "../AppLoader/AppLoader";
import { lifecycle, compose } from "recompose";
import { withRouter } from "react-router-dom";
import CSS from "./SinglePageCon.module.css";


const SinglePagePost = props => {
  const renderComments = () => {
    const { comments, isFetching, errors } = props.dataById;
    if (errors) {
      return <p className="error">An error occurred while loading!</p>;
    }
    if (isFetching) {
      return <AppLoader />;
    }
    let newsTemplate = null;
    if (comments.length) {
      newsTemplate = comments.map(function(item) {
        return <Comment key={item._id} data={item} />;
      });
    } else {
      newsTemplate = <p>Unfortunately there are no post!</p>;
    }
    return newsTemplate;
  };

  const { post, errors } = props.dataById;
  const { isLogged } = props;
  const { id } = props.match.params;

  return (
    <div>
      {" "}
      {!errors ? (
        <div className={CSS.container}>
          <h2>Post</h2>
          <hr />
          <Page data={post} />
          <h3>Comments:</h3>
          <hr />
          <div className={CSS.comments}>{renderComments()}</div>
          <p>
            <b>Your comment:</b>{" "}
          </p>
          {isLogged === true ? (
            <AddCommentContainer id={id} />
          ) : (
            <p>Please log in for post your comment!!!</p>
          )}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    dataById: state.postById,
    isLogged: state.user.isLogged
  };
};
const mapDispatchToProps = dispatch => {
 
  return {
    getPostById: index => {
      dispatch(getPostComments(index));
    }
  };
};
const enhance = lifecycle({
  async componentDidMount() {
    await this.props.getPostById(this.props.match.params.id);
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter,
  enhance
)(SinglePagePost);
