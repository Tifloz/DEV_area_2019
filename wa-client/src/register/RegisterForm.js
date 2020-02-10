import * as React from "react";
import api from "../api";
import {Redirect} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.styles = this.props.styles;
    this.regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    this.state = {
      email: '',
      password: '',
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
    api.signUp(this.state.email, this.state.password)
      .then((result) => {
        console.log('success sign up')
        return <Redirect to={'login'}/>
      }).catch(reject => {
        console.log(reject);
      });
  };

  render() {
    return (
      <form
        className={this.styles.form}
        id="main-signUp"
        onSubmit={this.handleSubmit}>
        <TextField
          // error={!this.regex.test(this.state.email)}
          // helperText={'Adresse mail invalide'}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={this.handleChange}
        />
        <TextField
          // error={(this.state.password.length < 4)}
          helperText={'4 caractères minimum'}
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
          disabled={!(this.regex.test(this.state.email) && this.state.password.length >= 4)}
        >
          Sign Up
        </Button>
      </form>
    )
  }
}