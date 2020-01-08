import React from 'react';
import './App.css';
import './Components/Login'
import SignIn from "./Components/Login";
import { Route, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return(
      <Router>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/login" component={SignIn} />
      </Router>
  );
}

export default App;
