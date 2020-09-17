import React, { Component } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import styles from "./styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class dangnhap extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card className={classes.card}>
            <div className={classes.root}>
              {/* <Grid container spacing={2}>
                  <Grid item xs={6}>
                  <img src="https://i.imgur.com/QTYyn0d.png" alt="logo" className={classes.image}/>
                  </Grid>
                  <Grid item xs={6}>
                    
                  </Grid>
                </Grid> */}
                <CardContent>
                      <form className={classes.form}>
                        <div className={classes.typo}>
                          <Typography variant="inherit">
                            Đăng Nhập Để Tiếp Tục ?
                          </Typography>
                        </div>
                        <label className={classes.set}>Tài Khoản</label>
                        <TextField
                          id="email"
                          labal="email"
                          className={classes.TextField}
                          fullWidth
                          margin="normal"
                          placeholder="Nhập Tài Khoản"
                        />
                        <label className={classes.set}>Mật Khẩu</label>
                        <TextField
                          id="password"
                          labal="password"
                          className={classes.TextField}
                          type="password"
                          fullWidth
                          margin="normal"
                          placeholder="Nhập Mật Khẩu"
                        />
                        <Button variant="contained" color="primary" fullWidth>
                          Login
                        </Button>
                      </form>
                    </CardContent>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(dangnhap);
