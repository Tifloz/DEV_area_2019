import React from 'react';
import {
 Text, View, StatusBar, Image
} from 'react-native';
import styles from '../styles/Header';

export default function Header(props) {

 return (
  <>
   <StatusBar backgroundColor={styles.statusbar.backgroundColor}></StatusBar>
   <View style={styles.topBar}>
    <Text
     style={{ fontSize: 27 }}
    >
     {props.title}
    </Text>
    <Image
     style={{ width: 42, height: 42 }}
     source={require('../img/area-logo.jpg')}
    />
   </View>
  </>
 )
}