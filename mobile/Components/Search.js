import React from 'react';
import {
  View, TextInput,
} from 'react-native';
import { Icon } from "native-base";

export default class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return(
      <View>
        <View
          style={styles.header}>
          <View
            style={styles.search}>
            <Icon name="ios-search" style={styles.icon} />
            <TextInput placeholder="Search"  style={styles.text} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  header: {
    height: 60,
    backgroundColor: '#483D8B',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  search: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  icon: {
    fontSize: 25,
    paddingLeft: 10,
  },
  text: {
    fontSize:15,
    paddingLeft:15,
  }
};