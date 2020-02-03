import React from 'react';
import
{
  View, TextInput, Button, Text, ScrollView,
} from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
export default class Login extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <ScrollView style={{ padding: 20 }}>
        <Text
          style={{ fontSize: 27 }}
        >
          Login
        </Text>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" />
        <View style={{ margin: 7 }} />
        <Button
          /* eslint-disable-next-line react/prop-types,react/destructuring-assignment */
          onPress={this.props.onLoginPress}
          title="Submit"
        />
      </ScrollView>
    );
  }
}
