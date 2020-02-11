import React from 'react';

import Dashboard from './dashboard/Dashboard';
import SignIn from "./auth/AuthPage";
import SignUp from "./register/RegisterPage";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { authStyles } from "./styles/styles"

function App() {
  const classes = authStyles();

  return (
      <Router>
        <Route exact path="/" component={() => {
          return (
            <SignIn classes={classes}/>
          )
        }}
        />
        <Route exact path="/signIn" component={() => {
          return (
            <SignIn classes={classes}/>
          )
        }}
        />
        <Route exact path="/signUp" component={() => {
          return (
            <SignUp classes={classes}/>
          )
        }}
        />
        <Route exact path="/dashboard" component={() => {
          return (
            <Dashboard classes={classes}/>
          )
        }}
        />
      </Router>
  );
}

export default App;
