import React, { Component } from 'react';
import styles from './styles';
import { withStyles, Switch,BrowserRouter } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import Login from './../Login/index';
import Dashboard from './../dashboard/index';
import theme from '../../commoms/Theme';
import { ADMIN_ROUTES } from './../../constants/index';
import AdminLayoutRoute from './../../commoms/AdminLayoutRoute/index';


class App extends Component {

  // renderAdminRoutes() {
  //   let xhtml = null;
  //   xhtml = ADMIN_ROUTES.map((route) =>{
  //     return (
  //       <AdminLayoutRoute
  //       key={route.path}
  //         path={route.path}
  //         component={route.component}
  //         exact={route.exact}
  //         name={route.name}
  //       />
  //     )
  //   });
  //   return xhtml;
  // }

  render() {
    return (
      <ThemeProvider theme={theme}>
      {/* <Switch>{this.renderAdminRoutes()}</Switch> */}
      <Login/>
      {/* <Dashboard/> */}
    </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
