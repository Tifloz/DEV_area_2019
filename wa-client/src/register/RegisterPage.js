import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React from 'react';
import Copyright from "../components/Copyright";
import {authStyles} from "../styles/styles";
import RegisterForm from "./RegisterForm";

export default function() {
  const classes = authStyles();

  // render()
  // {
    // let errorM = <div> </div>;
    // const { classes } = this.props;
    // if (this.state.errorMessage)
    //   errorM = <SnackbarContent message= {this.state.errorMessage} />;
    //
    // if (this.state.redirect) {
    //   //Affichage de la redirection
    //   return <Redirect to='/dashboard'/>;
    // }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <RegisterForm styles={classes}/>
        </div>
        <Box mt={8}>
          <Copyright/>
        </Box>
      </Container>
    )
}

// SignUp.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(SignUp);
