import React from 'react';
import axios from 'axios';
import { Header, Title } from 'native-base';
import {
  Text, View,
} from 'react-native';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: {}
    };
  }
  async componentDidMount() {
    try {
      const persons = await axios.get(
        'https://api.imgur.com/3/gallery/hot/viral/day/1?showViral={{showViral}}&mature={{showMature}}&album_previews={{albumPreviews}}', {
          'headers': {
            'Authorization': 'Client-ID 4024d2a2fe8e4ce'
          }
        });
      this.setState({ persons: persons.data.data });
    }
    catch {
    }
  }

  render() {
    return(
      <View>
        <Header>
          <Title style={styles.title}>AREA</Title>
        </Header>
      </View>
    );
  }
}

const styles = {
  title: {
    marginTop: 13,
  }
};