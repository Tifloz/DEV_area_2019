import React from "react";
import TwitterLogin from "react-twitter-auth"

export default function TwitterAuth(props) {
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState(null);

  const onSuccess = (response) => {
    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      localStorage.setItem('twitter_token', token);
      if (token) {
        setToken(token);
        setUser(user);
      }
      props.handleSuccess()
    });
  };

  const onFailed = (error) => {
    console.log(error);
  };

  return (
      <TwitterLogin
        loginUrl="http://localhost:8080/auth/twitter"
        onFailure={onFailed}
        onSuccess={onSuccess}
        requestTokenUrl="http://localhost:8080/auth/twitter/reverse"
      />
  );
}