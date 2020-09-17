import React, { Component } from "react";

// import Header from './header/index'
import Sidebar from "./Sidebar/index";
class Dashboard extends Component {
  render() {
    const { children,name } = this.props;
    return (
      <div>
        {/* <Header name={name}/> */}
        <Sidebar name={name} />
        {children}
      </div>
    );
  }
}

export default Dashboard;
