import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {
  View,
} from 'react-native';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';


// import * as React from "react";
// import { StyleSheet, Text, View } from "react-native";

// class Login extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Welcome to the login screen!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// export default Login;



class Login extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          // source={{uri: 'https://api.imgur.com/oauth2/authorize?client_id=4024d2a2fe8e4ce&response_type=token\n'}}
          onNavigationStateChange={(webViewState) => this._onNavigationStateChange(webViewState)}
        />
      </View>
    );
  }

  _onNavigationStateChange(webViewState) {
    let i = 0;
    let tab = webViewState.url.split("&");
    while (i !== tab.length) {
      tab[i].split("&");
      i += 1;
    }
    if (webViewState.url.includes("access_token")) {
      this.props.navigation.replace('NavBar');
    }
  }
}

export default Login;