import React from "react";
import TwitterLogin from "react-twitter-auth"
import api from "../api";

export default function TwitterAuth(props) {
  const onSuccess = (response) => {
    const token = response.headers.get('x-auth-token');
    response.json().then(() => {
      if (token)
        api.linkTwitterAccount(token, localStorage['token']).then(res => {
          props.handleSuccess("Twitter", true)
        }).catch(err => {
          console.error(err)
        })
    });
  };

  const onFailed = (error) => {
    console.error(error);
  };

  return (
      <TwitterLogin
        loginUrl="http://localhost:8080/twitter/auth"
        onFailure={onFailed}
        onSuccess={onSuccess}
        requestTokenUrl="http://localhost:8080/twitter/auth/reverse"
      />
  );
}