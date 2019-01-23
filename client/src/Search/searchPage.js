import React from "react";
import { connect } from "react-redux";
import {getSearch} from '../actions/searchActions';
import {resetState} from '../actions/searchActions';
import Dashboard from "../Dashboard/Dashboard";
import { lifecycle, compose } from "recompose";


const SearchContainer = props => {

  const loadMore = () => {
    const { posts } = props.search;
    let start = posts.length;
    let search = props.match.params.search;
    props.getSearchActions(start, search);
  };
  const { posts } = props.search;
  const { search } = props;
  return (
    <div>
      <h1 className="App">Search Result:</h1>
      <Dashboard
        data={posts}
        isFetching={search.isFetching}
        error={search.errors}
        loadMore={loadMore}
        isVisible={search.showLoadButton}
      />
    </div>
  );
};
const mapStateToProps = store => {
  return {
    search: store.search
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSearchActions: (start, search) =>{
      dispatch(getSearch(start, search))
    }, 
    resetStateAction:() =>{
      dispatch(resetState())
    }
  };
};

export const enhance = lifecycle({
  async componentDidMount() {
    await this.props.resetStateAction();
    let start = 0;
    let search = this.props.match.params.search;
    await this.props.getSearchActions(start, search);
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ), enhance)(SearchContainer);