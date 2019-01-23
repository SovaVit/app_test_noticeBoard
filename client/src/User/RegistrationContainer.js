import React from "react";
import {connect} from "react-redux";
import { login } from "../actions/userActions";
import AddUserForm from "./RegistrationForm";
import Modal from "./Modal";
import { FORM_ERROR } from "final-form";
import { AddUser } from "../utilities/apiUser";

const AddUserContainer = props => {
  async function submitRegistration(value, form) {
    let { from } = props.location.state || { from: { pathname: "/" } };
    try {
      const data = JSON.stringify({
        name: value.login,
        email: value.email,
        password: value.password
      });
      const res = await AddUser.fetchPost(data);
      await props.Login({
        name: res.user.name,
        token: res.token
      });
      return (form.reset(), props.history.push(from));
    } catch (err) {
      return {
        [FORM_ERROR]: "User already exist!"
      };
    }
  }

  const handleClose = () => {
    props.history.replace({ pathname: "/" });
  };

  return (
    <Modal>
      <AddUserForm
        handleSubmit={submitRegistration}
        handleClose={handleClose}
      />
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
    Login: input => {
      dispatch(login(input));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserContainer);
