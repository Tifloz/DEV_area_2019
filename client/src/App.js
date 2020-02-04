import React from 'react';

import './App.css';

import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Dashboard from './Components/Dashboard';
import CreateArea from './Components/CreateArea';

import { Route, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return(
      <Router>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/createArea" component={CreateArea} />
      </Router>
  );
}

export default App;
