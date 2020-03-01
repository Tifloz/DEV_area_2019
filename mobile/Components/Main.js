import React from 'react';
import {
  Text, View, Button, StatusBar
} from 'react-native';
import api from './api';
import Home from './Home';
import New from './New';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base'

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
            initialRouteName="MyAreas"
            tabBarOptions={{
            activeTintColor: 'black',
          }}>
            <Tab.Screen
              name="MyAreas"
              component={Home}
              options={{
                tabBarLabel: 'My Areas',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="albums" size={25} color={tintColor} />
                ),
              }}/>
            <Tab.Screen
              name="New Area"
              component={New}
              options={{
                tabBarLabel: 'My Areas',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="add" size={25} color={tintColor} />
                ),
              }}
            />
            <Tab.Screen
              name="quit"
              component={this.handleLogout}
              options={{
                tabBarLabel: 'My Areas',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="exit" size={25} color={tintColor} />
                ),
              }}
            />
          </Tab.Navigator>
      </NavigationContainer>
      </>
    );
  }
}
