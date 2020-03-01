import React from 'react';
import { View, TextInput, Button, Text, Image, StatusBar, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons';
import api from './api.js';
import styles from '../styles/Login';

// eslint-disable-next-line react/prefer-stateless-function
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      errorAuth: false,
    }
  }

  handleChange = (e) => {
    const target = e.target;

    this.setState({
      [target.name]: target.value,
    });
  };

  handlePress = (e) => {
    e.preventDefault()
    if (!this.state.email.length || !this.state.password.length) {
      ToastAndroid.show('Username and Password have to be filled !', ToastAndroid.SHORT);
      return null
    }

    api.signIn(this.state.email, this.state.password).then((result) => {
        if (result.status == 200) {
          console.log("TOKEN ? ===> " + result.data.token);
          AsyncStorage.setItem('token', result.data.token);
          this.props.onLoginPress();
        } else {
          ToastAndroid.show('Wrong password or username !', ToastAndroid.SHORT);
          this.setState({errorAuth: true})
        }
      }).catch((reject) => {
      ToastAndroid.show('An Error has occur !', ToastAndroid.SHORT);
      this.setState({
        password: '',
        errorMessage: '',
      })
    });
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <StatusBar backgroundColor={styles.statusbar.backgroundColor}></StatusBar>
        <View style={{ padding: 20, justifyContent: 'center', flexDirection: 'row'}}>
          <View style={{justifyContent: 'center'}}>
            <Image
              style={styles.logo}
              source={require('../img/area-logo.jpg')}
            />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.titleLogo}>My Area</Text>
            </View>
          </View>
        </View>
        <View style={{ padding: 35, justifyContent: 'center', flex: 1}}>
          <Text
            style={{ fontSize: 27 }}
          >
            Login
          </Text>
          <View style={styles.line} />
          <TextInput
            placeholder="Email Address *"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}/>
          <TextInput
            placeholder="Password *"
            autoCompleteType="password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}/>
          <View style={{ margin: 7 }} />
          {this.state.errorAuth && 
            <Text style={styles.errorAuth}>Wrong username or password</Text>
          }
          <Button
            /* eslint-disable-next-line react/prop-types,react/destructuring-assignment */
            onPress={this.handlePress}
            title="SIGN IN"
            color={styles.button.color}
          />
        </View>
        <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'column'}}>
            <Text style={{alignSelf: 'center'}}>Copyright © My Area 2020</Text>
        </View>
      </>
    );
  }
}
