import React, { useState } from "react";
import { Button } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import api from "../api";
import Alert from "@material-ui/lab/Alert";
import { useAuth } from "../context/auth";
import GoogleAuth from "./GoogleAuth";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setAuthToken } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.signIn(email, password)
      .then((result) => {
        if (result.status === 200) {
          setAuthToken(result.data.token);
          props.onRedirect();
        }
      }).catch(reject => {
      setPassword("");
      setError(reject.response ? reject.response.data.error : "");
    });
  };

  return (
      <form className={props.classes.form} onSubmit={handleSubmit}>
        <TextField
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
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
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
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
        <Grid
          container
          spacing={2}
          alignItems={'center'}
          style={{marginBottom: 10}}
        >
          <Grid item sm>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={props.classes.submit}
            >
              Sign In
            </Button>
          </Grid>
          <Grid item>
            <GoogleAuth onRedirect={props.onRedirect}/>
          </Grid>
        </Grid>
        { error !== "" &&
        <Alert severity="error" className={props.classes.errorAlert}>{ error }</Alert>
        }
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signUp" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
  );
}

