import React from "react";
import Post from "./Post";
import AppLoader from "../AppLoader/AppLoader";
import PropTypes from "prop-types";
import d from "./Dashboard.module.css";

const Dashboard = props => {
  const renderPosts = () => {
    const { data, isFetching, error } = props;
    if (error) {
      return <p className="error">An error occurred while loading!</p>;
    }
    if (isFetching) {
      return <AppLoader />;
    }
    let newsTemplate = null;
    if (data.length) {
      newsTemplate = data.map(function(item) {
        return <Post key={item.id} data={item} />;
      });
    } else {
      newsTemplate = <p>Unfortunately there are no posts ...</p>;
    }
    return newsTemplate;
  };

  return (
    <div className={d.dashboard}>
      <div className={d.postCont}>{renderPosts()}</div>
      <div>
        {props.isVisible && (
          <button
            className={d.loadMore}
            onClick={props.loadMore}
            href="#readmore"
          >
            Load more...
          </button>
        )}{" "}
      </div>
    </div>
  );
};
Dashboard.propTypes = {
  data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  isVisible: PropTypes.bool.isRequired
};

export default Dashboard;
