import * as React from "react";
import GoogleLogin from 'react-google-login';

export default class GoogleAuth extends React.Component {
  handleSuccess = (response) => {
    console.log('Success => ', response);
  };

  handleFailure = (response) => {
    console.log('Failure => ', response);
  };

  render() {
    return (
      <GoogleLogin
        buttonText={'Connexion via google'}
        onSuccess={this.handleSuccess}
        onFailure={this.handleFailure}
        clientId={'220501398447-9ksjr5slfkhj3ddb41mhbf0gbpirav13.apps.googleusercontent.com'}
        cookiePolicy={'single_host_origin'}
      />
    )
  }
}