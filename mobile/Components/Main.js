import React from 'react';
import {
  Text, View, Button, StatusBar
} from 'react-native';
import api from './api';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator(); 

// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  handleLogout = () => {
    api.logout()
    this.props.onLogoutPress()
    return (<View></View>)
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
      <NavigationContainer>
          <Tab.Navigator
            initialRouteName="My Areas"
            tabBarOptions={{
            activeTintColor: '#e91e63',
          }}>
            <Tab.Screen
              name="My Areas"
              component={Home}
              options={{
                tabBarLabel: 'My Areas'
              }}/>
            <Tab.Screen
              name="New Area"
              component={Home}
            />
            <Tab.Screen
              name="quit"
              component={this.handleLogout}
            />
          </Tab.Navigator>
      </NavigationContainer>
      </>
    );
  }
}
