import * as React from "react";
import {
  Button,
} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { Redirect } from "react-router-dom";
import api from "../api";
import Alert from "@material-ui/lab/Alert";
import GoogleAuth from "./GoogleAuth";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.styles = this.props.styles;
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
  }

  handleChange = (e) => {
    const target = e.target;

    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    api.signin(this.state.email, this.state.password)
      .then((result) => {
        return <Redirect to={'home'}/>
      }).catch(reject => {
      console.log(reject);
      this.setState({
        password: '',
        errorMessage: 'errorMessage: \'Invalid username or password !\'',
      })
    });
  };

  render() {
    return (
      <form className={this.styles.form} onSubmit={this.handleSubmit}>
        <TextField
          value={this.state.email}
          onChange={this.handleChange}
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
          value={this.state.password}
          onChange={this.handleChange}
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
          className={this.styles.submit}
        >
          Sign In
        </Button>
        <GoogleAuth/>
        { this.state.errorMessage !== '' &&
          <Alert severity="error" className={this.styles.errorAlert}>{this.state.errorMessage}</Alert>
        }
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    );
  }
}

