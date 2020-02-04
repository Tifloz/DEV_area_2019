import React from 'react';
import {
  ScrollView, Text, View, Button,
} from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <ScrollView style={{ padding: 20 }}>
        <Text
          style={{ fontSize: 27 }}
        >
          Welcome
        </Text>
        <View style={{ margin: 20 }} />
        <Button
          /* eslint-disable-next-line react/destructuring-assignment,react/prop-types */
          onPress={this.props.onLogoutPress}
          title="Logout"
        />
      </ScrollView>
    );
  }
}
