import * as React from "react";
import GoogleLogin from 'react-google-login';
import api from '../api'

export default class GoogleAuth extends React.Component {
  handleSuccess = (response) => {
    const fName = response.profileObj.givenName;
    const lName = response.profileObj.familyName;

    api.googleSign(response.tokenId, fName, lName)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        this.props.onRedirect();
      }).catch(reject => {
        console.log(reject);
    })
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