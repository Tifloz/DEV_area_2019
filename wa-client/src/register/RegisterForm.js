import * as React from "react";
import api from "../api";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    this.state = {
      email: '',
      password: '',
      fName: '',
      lName: '',
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
    api.signUp(this.state)
      .then((result) => {
        console.log('success sign up');
        this.props.onRedirect();
      }).catch(reject => {
        console.log(reject);
      });
  };

  render() {
    return (
      <form
        className={this.props.classes.form}
        id="main-signUp"
        onSubmit={this.handleSubmit}>
        <Grid
          container
          direction={"row"}
          spacing={1}
        >
          <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fName"
              label="First name"
              name="fName"
              autoComplete="First name"
              autoFocus
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lName"
              label="Last name"
              name="lName"
              autoComplete="Last name"
              onChange={this.handleChange}
            />
          </Grid>
        </Grid>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          onChange={this.handleChange}
        />
        <TextField
          helperText={'6 caractères minimum'}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={this.handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={!(this.regex.test(this.state.email) && this.state.password.length >= 6)}
        >
          Sign Up
        </Button>
      </form>
    )
  }
}