import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardContainer from "../Dashboard/DashboardContainer";
import SearchContainer from '../Search/searchPage'
import UserContainer from "../User/UserContainer";
import NotFound from "../NotFound/NotFound";
import SinglePagePost from "../SinglePage/SinglePageCon";
import AddUserContainer from '../User/RegistrationContainer';
import MyRoom from "../MyRoom/MyRoom";
import requireAuthentication from "../containers/AuthenticatedComponent/index";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={DashboardContainer} />
    <Route path="/login" component={UserContainer} />
    <Route 
      path="/myroom"
      component={requireAuthentication(MyRoom)}
    />
    
    <Route exact path="/registration" component={AddUserContainer} />
    <Route exact path="/:id" component={SinglePagePost} />
    <Route exact path="/search/:search" component={SearchContainer} />
    <Route path='*' component={NotFound} />
  </Switch>
);
export default Routes;
