import React, { Component } from "react";
import { Route } from "react-router-dom";
import Dashboard from "../../../components/dashboard";
class AdminLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    console.log({...remainProps});
    return <Route {...remainProps} 
        render={routeProps => {
            return (
                <Dashboard {...remainProps}>
                    <YourComponent {...routeProps}/>
                </Dashboard>
            )
        }}
    />;
  }
}

export default AdminLayoutRoute;
