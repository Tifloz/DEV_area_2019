import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React from 'react';
import Copyright from "../components/Copyright";
import RegisterForm from "./RegisterForm";
import { Redirect } from "react-router-dom"

export default class SignUp extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    }
  }

  handleRedirect = () => {
    console.log('handleRedirect');
    this.setState({
      redirect: true,
    })
  };

  render() {
    if (this.state.redirect)
      return (<Redirect to={"/dashboard"}/>);
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={this.props.classes.paper}>
          <Avatar className={this.props.classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <RegisterForm
            classes={this.props.classes}
            onRedirect={this.handleRedirect}
          />
        </div>
        <Box mt={8}>
          <Copyright/>
        </Box>
      </Container>
    )
  }
}