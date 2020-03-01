import React from 'react';
import {
  Text, View, Button, StatusBar, Image
} from 'react-native';
import api from './api';
import styles from '../styles/New';
import { ScrollView } from 'react-native-gesture-handler';

// eslint-disable-next-line react/prefer-stateless-function
export default class New extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <StatusBar backgroundColor={styles.statusbar.backgroundColor}></StatusBar>
        <View style={ styles.topBar }>
            <Text
              style={{ fontSize: 27 }}
            >
              New Area 
            </Text>
            <Image
                style={{ width: 42, height: 42}}
                source={require('../img/area-logo.jpg')}
            />
        </View>
      </>
    );
  }
}
