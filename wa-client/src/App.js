import React from 'react';

import Dashboard from './components/Dashboard';
import SignInSide from "./auth/AuthPage";
// import SignUp from "./components/SignUp";
// import './css/App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
      <Router>
        <Route exact path="/" component={SignInSide} />
        <Route exact path="/signIn" component={SignInSide} />
        {/*<Route exact path="/signUp" component={SignUp} />*/}
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
  );
}

export default App;
