import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from "../components/Copyright";
import RegisterForm from "./RegisterForm";
import { Redirect } from "react-router-dom"
import { authStyles } from "../styles/styles";
import { useTheme } from "@material-ui/core";

export default function SignUp() {
  const [redirect, setRedirect] = useState(false);
  const classes = authStyles(useTheme);

  if (redirect)
    return (<Redirect to={"/dashboard"}/>);
  else
    return (
      <Container component="main" maxWidth="sm">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <RegisterForm
            classes={classes}
            onRedirect={() => {
              setRedirect(true)
            }}
          />
        </div>
        <Box mt={8}>
          <Copyright/>
        </Box>
      </Container>
    )
}