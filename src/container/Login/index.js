import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';


import styles from './styles';
class Login extends Component {

    Copyright(){
        let xhtml = null;
        xhtml = (
            <Typography variant="body2" color="textSecondary" align="center">
            {'Design By '}
            <Link color="inherit" href="https://www.facebook.com/0MaiNgocDuong0/">
              Mai Ngoc Duong
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
        return xhtml;
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={12} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <form className={classes.form} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    
                  </Grid>
                  <Box mt={5}>
                    {this.Copyright()}
                  </Box>
                </form>
              </div>
            </Grid>
          </Grid>
        );
    }
}

export default withStyles(styles)(Login);