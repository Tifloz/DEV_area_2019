import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import LoginForm from "./LoginForm";
import Box from "@material-ui/core/Box";
import Copyright from "../components/Copyright";
import { Redirect } from "react-router-dom"
import { authStyles } from "../styles/styles";
import { useTheme } from "@material-ui/core";

export default function SignIn() {
  const [logged, setLogged] = useState(false);
  const classes = authStyles(useTheme);

  if (logged)
    return (<Redirect to={"/dashboard"}/>);
  else
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline/>
        <Grid item xs={false} sm={4} md={7} className={classes.image}/>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <LoginForm
              classes={classes}
              onRedirect={() => {
                setLogged(true)
              }}
              // auth={this.props.auth}
            />
            <Box mt={5}>
              <Copyright/>
            </Box>
          </div>
        </Grid>
      </Grid>
    )
}