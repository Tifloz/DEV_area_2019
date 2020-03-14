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

// export default class SignIn extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       redirect: false,
//     }
//   }
//
//   handleRedirect = () => {
//     this.setState({
//       redirect: true,
//     })
//   };
//
//   render() {
//     if (this.state.redirect)
//       return <Redirect to={"/dashboard"}/>
//     return (
//       <Grid container component="main" className={this.props.classes.root}>
//         <CssBaseline/>
//         <Grid item xs={false} sm={4} md={7} className={this.props.classes.image}/>
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <div className={this.props.classes.paper}>
//             <Avatar className={this.props.classes.avatar}>
//               <LockOutlinedIcon/>
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <LoginForm
//               classes={this.props.classes}
//               onRedirect={this.handleRedirect}
//               auth={this.props.auth}
//             />
//             <Box mt={5}>
//               <Copyright/>
//             </Box>
//           </div>
//         </Grid>
//       </Grid>
//     );
//   }
// }

export default function SignIn() {
  const [logged, setLogged] = useState(false);
  const classes = authStyles();

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