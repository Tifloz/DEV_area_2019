import React, { useState } from 'react';
import Dashboard from './dashboard/Dashboard';
import SignIn from "./auth/SignIn";
import SignUp from "./register/SignUp";
import CreateArea from "./CreateArea/CreateArea";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AboutContent from './components/AboutContent'
import PrivateRoute from "./components/PrivateRoute";
import { AuthContext } from "./context/auth"
import ClientApk from "./components/ClientApk";

function App() {
  const existingToken = localStorage.token;
  const [authToken, setAuthToken] = useState(existingToken);

  const setToken = (token) => {
    localStorage.token = token;
    setAuthToken(token);
  };

  const clearToken = () => {
    localStorage.clear();
    setAuthToken(undefined);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken, clearToken }}>
      <Router>
        <PrivateRoute exact path="/" component={Dashboard}/>
        <Route exact path="/signIn" component={SignIn}/>
        <Route exact path="/signUp" component={SignUp}/>
        <PrivateRoute path={"/dashboard"} component={Dashboard}/>
        <PrivateRoute path={"/createArea"} component={CreateArea}/>
        <Route exact path="/about.json" component={AboutContent}/>
        <Route exact path="/client.apk" component={ClientApk}/>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
