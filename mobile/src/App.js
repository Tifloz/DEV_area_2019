/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import Login from './Components/Login';
import Main from './Components/Main';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.isLoggedIn) {
      return (
        // eslint-disable-next-line react/jsx-filename-extension
        <Main
          onLogoutPress={() => this.setState({ isLoggedIn: false })}
        />
      );
    }
    return (
      <Login
        onLoginPress={() => this.setState({ isLoggedIn: true })}
      />
    );
  }
}

export default App;
