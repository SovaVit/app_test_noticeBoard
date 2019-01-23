import React from "react";
import { shallow } from "enzyme";
import { enhance } from "./DashboardContainer";
import DashboardContainer from "./DashboardContainer";
import { toClass, compose } from "recompose";

describe("DashContainer test", () => {
  const props = {
    data: [],
    isFetching: true,
    error: ""
  };
  const mockFetchGetNews = jest.fn();
  const nextProps = {
    ...props,
    getPostsActions: mockFetchGetNews
  };
  const ToClass = toClass(DashboardContainer);
  const HOC = compose(enhance)(ToClass);
  const DC = shallow(<HOC {...nextProps} />);

  it("first render", () => {
    expect(DC).not.toBe(null);
  });
  it("dispatches the `getPostsActions()`", () => {
    expect(mockFetchGetNews).toHaveBeenCalledTimes(1);
  });
  
});
