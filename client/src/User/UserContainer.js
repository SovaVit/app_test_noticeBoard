import React from "react";
import { connect } from "react-redux";
import { User } from "./user";
import { bindActionCreators } from "redux";
import * as userActions from "../actions/userActions";
import Modal from "./Modal";
import Logout from "./logout";
import { FORM_ERROR } from "final-form";
import { Login } from "../utilities/apiUser";
import { LogOut } from "../utilities/apiUser";

const UserContainer = props => {
  async function handleSubmit(event, form) {
    let { from } = props.location.state || { from: { pathname: "/" } };
    const data = JSON.stringify({
      email: event.email,
      password: event.password
    });
    try {
      const res = await Login.fetchPost(data);
      await props.actions.login({
        name: res.user.name,
        token: res.token
      });
      return( form.reset(), props.history.push(from));
    } catch (err) {
      return {
        [FORM_ERROR]: "Wrong Name or Password!"
      };
    }
  }

  const handleClose = () => {
    props.history.replace({ pathname: "/" });
  };
  const handleLogout = async event => {
    event.preventDefault();
    try {
      await LogOut.fetchPost(props.user.token);
      await props.actions.logout();
      return props.history.replace({ pathname: "/" });
    } catch (err) {
      return handleError(err);
    }
  };
  let ERRORS = {};
  const handleError =(err)=>{
   if(err) {
    return ERRORS ={error: err} 
  } 
  }
  return (
    <Modal>
      {props.user.isLogged === false ? (
        <User handleSubmit={handleSubmit} handleClose={handleClose} />
      ) : (
        <Logout handleClose={handleClose} handleLogout={handleLogout} 
        ERRORS= {ERRORS}/>
      )}
    </Modal>
  );
};
const mapStateToProps = store => {
  return {
    user: store.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
