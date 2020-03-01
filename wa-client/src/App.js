import React from 'react';

import Dashboard from './dashboard/Dashboard';
import SignIn from "./auth/AuthPage";
import SignUp from "./register/RegisterPage";
import CreateArea from "./CreateArea/CreateArea";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AboutContent from './components/AboutContent'
import { authStyles, dashboardStyles, createAreaStyles } from "./styles/styles"

function App() {
  const classes = authStyles();
  const dashboardClasses = dashboardStyles();
  const createAreaClasses = createAreaStyles();

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
            <Dashboard classes={dashboardClasses}/>
          )
        }}
        />

        <Route exact path="/createArea" component={() => {
          return (
            <CreateArea classes={createAreaClasses}/>
          )
        }}
        />

        <Route exact path="/about" component={() => {
          return (
            <AboutContent/>
          )
        }}
        />

      </Router>
  );
}

export default App;
