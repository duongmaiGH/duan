import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

class LoginLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    console.log({ ...remainProps });
    return (
      <Route
        {...remainProps}
        render={(routeProps) => {
          return <YourComponent {...routeProps} />;
        }}
      />
    );
  }
}

LoginLayoutRoute.propTypes = {};

export default LoginLayoutRoute;
