import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchIsNeed } from "../actions/userPotsActions";
import AppLoader from "../AppLoader/AppLoader";
import UserPost from "./userPost";
import * as style from "./MyRoom.module.css";

class MyRoomPosts extends React.Component {
  constructor() {
    super();
    this.RenderPosts = this.RenderPosts.bind(this);
   
  }

  componentDidMount() {
    this.props.getUserPosts(this.props.token);
  }

  RenderPosts = () => {
    const { userPosts } = this.props.userPosts;
    let newsTemplate = null;
    if (userPosts.length) {
      newsTemplate = userPosts.map(function(item) {
        return <UserPost key={item.id} data={item}  />;
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
    const { isFetching, errors } = this.props.userPosts;

    return (
      <div className={style.container}>
        {errors && <p>An error occurred while loading!</p>}
        {isFetching === true && <AppLoader />}
        <table className={style.my_table}>
          <thead className={style.my_head}>
            <tr>
              <th>Post</th>
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
MyRoomPosts.propTypes = {
  userPosts: PropTypes.shape({
    userPosts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    errors: PropTypes.string,
  }),
  token: PropTypes.string.isRequired
};
const mapStateToProps = state => {
  return {
    userPosts: state.userPosts,
    token: state.user.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUserPosts: token => {
      dispatch(fetchIsNeed(token))}
     }
    }
  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRoomPosts);
