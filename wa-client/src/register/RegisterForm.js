import React, { useState } from "react";
import api from "../api";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import {useAuth} from "../context/auth";

export default function RegisterForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const { setAuthToken } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.signUp({
      email: email,
      password: password,
      fName: firstName,
      lName: lastName
    })
      .then((response) => {
        if (response.status === 200) {
          setAuthToken(response.data.token);
          props.onRedirect();
        }
      }).catch(reject => {
        setPassword("");
        setError(reject.response ? reject.response.data.error : "");
      });
  };

  return (
    <form
      className={props.classes.form}
      id="main-signUp"
      onSubmit={handleSubmit}>
      <Grid
        container
        direction={"row"}
        spacing={1}
      >
        <Grid item>
          <TextField
            value={firstName}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First name"
            name="firstName"
            autoComplete="First name"
            autoFocus
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            value={lastName}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last name"
            name="lastName"
            autoComplete="Last name"
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          />
        </Grid>
      </Grid>
      <TextField
        value={email}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <TextField
        value={password}
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
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      { error !== "" &&
      <Alert severity="error" className={props.classes.errorAlert}>{error}</Alert>
      }
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!(regex.test(email) && password.length >= 6)}
      >
        Sign Up
      </Button>
    </form>
  )
}