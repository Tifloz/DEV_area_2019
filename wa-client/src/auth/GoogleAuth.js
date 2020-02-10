import * as React from "react";
import GoogleLogin from 'react-google-login';
import api from '../api'
import {Redirect} from "react-router-dom";

export default class GoogleAuth extends React.Component {
  handleSuccess = (response) => {
    console.log('Success => ', response);
    api.googleSign(response.tokenId)
      .then(response => {
        console.log('Successfull connected');
        return <Redirect to={'dashboard'}/>
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