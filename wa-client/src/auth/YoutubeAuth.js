import React from "react";
import api from "../api";
import GoogleLogin from "react-google-login";

export default function YoutubeAuth(props) {
  const handleSuccess = (response) => {
    api.linkGoogleAccount(response.tokenId, localStorage['token'])
      .then(response => {
        if (response.status === 200)
          props.handleSuccess("Youtube", true);
      }).catch(reject => {
        console.error(reject);
    })
  };

  const handleFailure = (response) => {
    console.error(response);
  };

  return (
    <GoogleLogin
      buttonText={'Connexion via google'}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      clientId={'220501398447-9ksjr5slfkhj3ddb41mhbf0gbpirav13.apps.googleusercontent.com'}
      cookiePolicy={'single_host_origin'}
    />
  );
}