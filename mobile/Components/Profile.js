import React from 'react';
import {
  Text, View,
} from 'react-native';
import { Header, Title } from "native-base";

export default class Profile extends React.Component {
  render() {
    return (
      <View>
        <Header>
        </Header>
        <View style={styles.avatar}></View>
        <Text style={styles.user}>Hathorx</Text>
        <View style={styles.favorites}></View>
      </View>
    );
  }
}

const styles = {
  user: {
    marginTop: 13,
    textAlign: 'center',
    fontSize: 20,
  },
  avatar: {
    marginTop: 150,
  },
  favorites: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
};