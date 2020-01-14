import React from 'react';

import Dashboard from './Components/Dashboard';
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import './css/App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return(
      <Router>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
  );
}

export default App;
