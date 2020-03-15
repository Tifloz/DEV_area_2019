[![Build Status](https://travis-ci.com/Tifloz/DEV_area_2019.svg?token=pTcnxC4Rz6TMqaVu5wks&branch=master)](https://travis-ci.com/Tifloz/DEV_area_2019)
# AREA

// User Documentation

The team : Florian Louvet - Georges Rached - Sabri Ouaked - Lucas Duboisse - Gautier Plancq - Sebastien Nardy

### Global info :
 - Nomber of people : 6
 - Repository : DEV_area_2019
 - Languages : React, Node.js, React Native
 - Server port : 8080
 - Client port : 8081
 
 
### Project context :

 - Project management with [Trello](https://trello.com/b/opGjBwdh/area).
 - CI / CD using [Travis](https://dillinger.io/)

### What is AREA ?
    - Area is a software application throught the creation of a business application.
    - A software application suite that functions similar to IFTTT and/or Zapier.
    - An application server to implement all the features.
    - A web client to use the application from your browser by querying the application server.
    - A mobile client to use the application from your phone by querying the application server.

### The Features !

  - The user can obtain an account by registering.
  - The registered user then confirms their enrollment on the application before being able to use it.
  - The application asks the authenticated user to subscribe to Services.
  - The authenticated user composes AREA by interconnecting an Action to a REAction previously configured for service.
  - The action set on a service is triggered automatically and execute the reaction.

### Installation and run

AREA requires [Docker](https://www.docker.com/)

FOR using Discord reaction, thanks to come to this server : https://discord.gg/NkZx5M2


```sh
$ docker-compose build && docker-compose up
```

FOR the Dockerfile in the mobile directory : 

```sh
$ docker-compose build client_mobile && docker-compose up client_mobile
```

### API Documentation

We used [Swagger](https://swagger.io/) that is an open-source software framework backed by a large ecosystem of tools that helps developers design, build, document, and consume RESTful web services.
The following link provides the API Structure for our project AREA : http://localhost:8080/api-docs/#/Users/post_user_signUp

### Development

The project consist two interfaces :

 - #### A web view :
    - Technologies Used :
      - We used Node.js for the Web server background.
      - And for the front side, we used ReactJS.

 - #### A mobile view :
    - Technologies Used :
      - We used Node JS for the Web server background, same as the web view.
      - And for the front side, we used React Native.
      - For the APK file, the downloaded file can be found on the localhost link from the web client : localhost:8081/client.apk

#### Authentication

The project consist three ways of authentication for the Web view :
  - A Google Authentication (a way to sign in with a Google Account).
  - A Login Form that we created with an error handling, if you put an error to the login or password.