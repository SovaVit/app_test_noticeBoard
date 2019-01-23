import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchIsNeed } from "../actions/userCommentsActions";
import AppLoader from "../AppLoader/AppLoader";
import UserComment from "./userComment";
import * as style from "./MyRoom.module.css";

class MyRoomComments extends React.Component {
  constructor() {
    super();
    this.RenderPosts = this.RenderPosts.bind(this);
  }
  componentDidMount() {
    this.props.getUserComments(this.props.token);
  }
  RenderPosts = () => {
    const { userComments } = this.props.userComments;
    let newsTemplate = null;
    if (userComments.length) {
      newsTemplate = userComments.map(function(item) {
        return <UserComment key={item._id} data={item} />;
      });
    } else {
      newsTemplate = (
        <tr>
          <td>Unfortunately there are no posts ...</td>
        </tr>
      );
    }
    return newsTemplate;
  };
  render() {
    const { errors, isFetching } = this.props.userComments;
    return (
      <div className={style.container}>
        {errors && <p>An error occurred while loading!</p>}
        {isFetching === true && <AppLoader />}
        <table className={style.my_table}>
          <thead className={style.my_head}>
            <tr>
              <th>Comment</th>
              <th>Date</th>
              <th>{""}</th>
              <th>{""}</th>
            </tr>
          </thead>
          <tbody>{this.RenderPosts()}</tbody>
        </table>
      </div>
    );
  }
}
MyRoomComments.propTypes = {
  userComments: PropTypes.shape({
    userComments: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }),
  token: PropTypes.string.isRequired
};
const mapStateToProps = state => {
  return {
    userComments: state.userComments,
    token: state.user.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUserComments: token => {
      dispatch(fetchIsNeed(token));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRoomComments);
