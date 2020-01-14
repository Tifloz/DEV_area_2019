import * as React from "react";
import {
  Button,
} from '@material-ui/core';
import Email from "./Email";
import Password from "./Password";


export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.state = {
      email: {
        error: false,
        value: '',
      },
      password: {
        error: false,
        value: '',
      },
    }
  }

  handleEmailInput = (value) => {
    this.setState({
      email: {
        value: value,
        error: !this.emailRegex.test(value),
      },
    })
  };

  handlePasswordInput = (value) => {
    this.setState({
      password: {
        value: value,
        error: value.length < 6,
      }
    })
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <form className={"loginFormInput"} autoComplete={"off"}>
        <Email
          style={{paddingBottom: 20}}
          error={this.state.email.error}
          value={this.state.email.value}
          onChange={this.handleEmailInput}
        />
        <Password
          style={{paddingBottom: 25}}
          error={this.state.password.error}
          value={this.state.password.value}
          onChange={this.handlePasswordInput}
        />
        <Button
          variant="contained"
          color="primary"
          size={"small"}
          onClick={this.handleSubmit}>
          Connexion
        </Button>
      </form>
    );
  }
}

