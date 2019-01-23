import React, { Component } from "react";
import "../cssComponents/App.css";
import Routes from "../route/routes";
import NavBar from '../NavBar/Nav'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Routes />
      </div>
    );
  }
}

export default App;
