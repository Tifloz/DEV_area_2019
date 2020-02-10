import React from 'react';

import Dashboard from './dashboard/Dashboard';
import SignIn from "./auth/AuthPage";
import SignUp from "./register/RegisterPage";
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
      <Router>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
  );
}

export default App;
