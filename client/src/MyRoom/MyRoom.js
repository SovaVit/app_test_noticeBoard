import React, { Component } from "react";
import MyRoomRoutes from "./MyRoomRoutes";
import SideBar from "../Sidebar/sideBar";

class MyRoom extends Component {
  render() {
    return (
      <>
        <SideBar />
        <MyRoomRoutes />
      </>
    );
  }
}

export default MyRoom;
