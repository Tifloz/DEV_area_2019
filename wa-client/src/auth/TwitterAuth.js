import React from "react";
import TwitterLogin from "react-twitter-auth"
import api from "../api";

export default function TwitterAuth(props) {
  // const [user, setUser] = React.useState(null);

  const onSuccess = (response) => {
    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      if (token)
        api.linkTwitterAccount(token, localStorage['token']).then(res => {
          console.log(res);
          props.handleSuccess()
        }).catch(err => {
          console.log(err)
        })
      // if (token) {
      //   console.log(user);
      //   localStorage.setItem('twitter_token', token);
      //   setUser(user);
      // }
      // props.handleSuccess()
    });
  };

  const onFailed = (error) => {
    console.log(error);
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