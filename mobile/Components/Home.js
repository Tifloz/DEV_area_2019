import React from 'react';
import {
  View, Button, StatusBar, Image, ScrollView
} from 'react-native';
import api from './api';
import styles from '../styles/Home';
import Header from './Header';
import { Card, CardItem, Body, Text, Thumbnail } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { act } from 'react-test-renderer';
import { ThemeProvider } from '@react-navigation/native';

async function getToken() {
  const token = await AsyncStorage.getItem('token')
  return token
}

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      areas: []
    }
  }

  getAreaCard(i, id, action, aservice, reaction, rservice, img) {
    let card =  <Card key={id}>
                  <CardItem header bordered>
                    <Text>Area n°{i}</Text>
                  </CardItem>
                  <CardItem bordered>
                    <Body style={styles.bodyCard}>
                      <Text>
                        Action: {action} [{aservice}]{"\n"}
                        Reaction: {reaction} [{rservice}]
                      </Text>
                      <Thumbnail source={{uri: img}}></Thumbnail>
                    </Body>
                  </CardItem>
                  <CardItem footer bordered>
                    <Text>{id}</Text>
                  </CardItem>
                </Card>
    return card
  }

  componentDidMount() {
    let areas = [];
    let i = 1;

    getToken().then((token) => {
      api.getAreasByUserId(token).then((result) => {
        if (!result)
          return 0;
        console.log('action: ' + result.data[0].event.action)
        console.log('service: ' + result.data[0].event.service)
        console.log('reaction: ' + result.data[0].trigger.reaction)
        console.log('service: ' + result.data[0].trigger.service)
        result.data.forEach(area => {
          console.log('new area')
          console.log(area)
          areas.push(this.getAreaCard(i, area.id, area.event.action, area.event.service, area.trigger.reaction, area.trigger.service, area.img));
          i++;
        })
        this.setState({areas: areas})
      }
      ).catch((error) => {
        console.log('Here is an error')
        console.log(error)
      })
    });
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <Header title="My Areas" />
        <View style={{ marginTop: 5, flexDirection: 'column', flex: 1}}>
          <ScrollView style={{ marginHorizontal: 5, flexDirection: 'column'}}>
            { this.state.areas }
          </ScrollView>
        </View>
      </>
    );
  }
}
