import React, { useState } from 'react';

import Dashboard from './dashboard/Dashboard';
import SignIn from "./auth/SignIn";
import SignUp from "./register/SignUp";
import CreateArea from "./CreateArea/CreateArea";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AboutContent from './components/AboutContent'
import {Redirect} from "react-router-dom"
import {authStyles, dashboardStyles, createAreaStyles} from "./styles/styles"
import api from "./api";
import ClientApk from "./components/ClientApk";

import PrivateRoute from "./components/PrivateRoute";
import { AuthContext } from "./context/auth"

function App() {
  const classes = authStyles();
  const dashboardClasses = dashboardStyles();
  const createAreaClasses = createAreaStyles();

  const existingToken = localStorage.token;
  const [authToken, setAuthToken] = useState(existingToken);

  const setToken = (token) => {
    localStorage.token = token;
    setAuthToken(token);
  };

  const clearToken = () => {
    localStorage.clear();
    setAuthToken();
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken, clearToken }}>
      <Router>
        <PrivateRoute exact path="/" component={() => {
          return (
            <Dashboard classes={dashboardClasses}/>
          );
        }}/>
        <Route exact path="/signIn" component={SignIn}/>
        <Route exact path="/signUp" component={SignUp}/>
        <PrivateRoute path={"/dashboard"} component={() => {
          return (
            <Dashboard
              classes={dashboardClasses}
            />
            )
        }}/>
        {/*<PrivateRoute path={"/createArea"} component={() => {*/}
        {/*  return (*/}
        {/*    <CreateArea classes={createAreaStyles}/>*/}
        {/*  );*/}
        {/*}}*/}
        {/*/>*/}
        {/*<Route exact path="/dashboard" component={() => {*/}
        {/*    return (*/}
        {/*        <Dashboard classes={dashboardClasses}/>*/}
        {/*    )*/}
        {/*}}*/}
        {/*/>*/}

        {/*<Route exact path="/createArea" component={() => {*/}
        {/*    return (*/}
        {/*        <CreateArea classes={createAreaClasses}/>*/}
        {/*    )*/}
        {/*}}*/}
        {/*/>*/}

        <Route exact path="/about" component={() => {
          return (
            <AboutContent/>
            )
        }}
        />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
