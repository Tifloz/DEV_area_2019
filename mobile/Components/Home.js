import React from 'react';
import {
  View, Button, StatusBar, Image, ScrollView
} from 'react-native';
import api from './api';
import styles from '../styles/Home';
import { Card, CardItem, Body, Text } from 'native-base';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';

//Exemple Cards
let getCard = () => {
  let services = ['Twitter', 'Amazon', 'Facebook', 'Gmail', 'Outlook', 'Intra Epitech']
  let card = (i, service) => (<Card key={i}>
    <CardItem header bordered>
      <Text>Area n°{i}</Text>
    </CardItem>
    <CardItem bordered>
      <Body>
        <View>
          <Text>
            NativeBase is a free and open source framework that enable
            developers to build
            high-quality mobile apps using React Native iOS and Android
            apps
            with a fusion of ES6.
          </Text>
            <View style={{alignItems: 'center', }}>
              <GoogleSigninButton
                style={{ width: 192, height: 60 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => {console.log('ok')}}
              />
            </View>
          </View>
      </Body>
    </CardItem>
    <CardItem footer bordered>
      <Text>{service}</Text>
    </CardItem>
  </Card>);
  let res = [];

  for (let i = 1; i <= 10; i++ ) {
    res.push(card(i, services[Math.floor(Math.random() * Math.floor(services.length))]));
  }
  return res
}

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <StatusBar backgroundColor={styles.statusbar.backgroundColor}></StatusBar>
        <View style={ styles.topBar }>
          <Text style={{ fontSize: 27 }}>My Areas</Text>
          <Image
            style={{ width: 42, height: 42}}
            source={require('../img/area-logo.jpg')}
          />
        </View>
        <View style={{ marginTop: 5, flexDirection: 'column', flex: 1}}>
          <ScrollView style={{ marginHorizontal: 5, flexDirection: 'column'}}>
            {getCard()}
          </ScrollView>
        </View>
      </>
    );
  }
}
