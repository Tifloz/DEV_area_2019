import React from 'react';
import {
  Text, View, Button, StatusBar
} from 'react-native';
import api from './api';
import styles from '../styles/Home';

// eslint-disable-next-line react/prefer-stateless-function
export default class Home        extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <StatusBar backgroundColor={styles.statusbar.backgroundColor}></StatusBar>
        <View style={{ padding: 20 }}>
          <Text
            style={{ fontSize: 27 }}
          >
            Welcome
          </Text>
          <View style={{ margin: 20 }} />
        </View>
      </>
    );
  }
}
