import React from "react";
import { connect } from "react-redux";
import { fetchIsNeed } from "../actions/pageActions";
import SearchBar from "./SearchBar";
import Dashboard from "./Dashboard";
import { lifecycle, compose } from "recompose";

const DashboardContainer = props => {
  const submitSearch = e => {
    props.history.push({ pathname: `/search/${e.Search}` });
  };

  const loadMore = () => {
    const { posts } = props.page;
    let start = posts.length;
    props.getPostsActions(start);
  };
  const { posts } = props.page;
  const { page } = props;
  return (
    <div>
      <h1 className="App">Notice Board</h1>
      <SearchBar onSubmit={submitSearch} />
      <Dashboard
        data={posts}
        isFetching={page.isFetching}
        error={page.errors}
        loadMore={loadMore}
        isVisible={page.showLoadButton}
      />
    </div>
  );
};
const mapStateToProps = store => {
  return {
    page: store.page
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPostsActions: start => {
      dispatch(fetchIsNeed(start));
    }
  };
};
export const enhance = lifecycle({
  async componentDidMount() {
    let start = 0;
    await this.props.getPostsActions(start);
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  enhance
)(DashboardContainer);
