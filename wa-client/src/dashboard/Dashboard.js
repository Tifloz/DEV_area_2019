import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import React from 'react';
import Copyright from "../components/Copyright";

export default class dashboard extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={this.props.classes.paper}>
          <Avatar className={this.props.classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome to dashboard
          </Typography>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    )
  }
}

