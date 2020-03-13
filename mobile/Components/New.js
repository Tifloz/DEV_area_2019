import React from 'react';
import {
  TouchableOpacity
} from 'react-native';
import {
  Container, Content, Text, Icon
} from 'native-base';
import api from './api';
import styles from '../styles/New';
import Header from './Header';
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
        <Header title="New Area" />
        <Container >
          <Content contentContainerStyle={styles.container} padder>
          <Text style={styles.text}>IF</Text>
          <TouchableOpacity>
            <Text style={styles.text}><Icon name='add-circle' style={styles.icon} /> THIS</Text>
          </TouchableOpacity>
          <Text style={styles.text}>THEN</Text>
          <TouchableOpacity>
            <Text style={styles.text}><Icon name='add-circle' style={styles.icon} /> THAT</Text>
          </TouchableOpacity>
          </Content>
        </Container>
      </>
    );
  }
}
