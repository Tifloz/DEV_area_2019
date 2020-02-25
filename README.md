[![Build Status](https://travis-ci.com/Tifloz/DEV_area_2019.svg?token=pTcnxC4Rz6TMqaVu5wks&branch=master)](https://travis-ci.com/Tifloz/DEV_area_2019)
# AREA

// documentation utilisateur
// documentation API

Team Work : Florian Louvet - Georges Rached - Sabri Ouaked - Lucas Duboisse - Gautier Plancq - Sebastien Nardy

### Informations :
 - Nombers of personnes : 6
 - Repository : DEV_area_2019
 - Languages : React, Node.js
 - Compilation : docker-compose build && docker-compose up
 - Server port : 8080
 - Client port : 8081
 
 
### Environnement fonctionnel :

 - Project management with [Trello](https://trello.com/b/opGjBwdh/area).
 - Documentation with [Dillinger](https://dillinger.io/)

### What is AREA ?
    - Area is a software application throught the creation of a business application.
    - A software application suite that functions similar to IFTTT and/or Zapier.
    - An application server to implement all the features.
    - A web client to use the application from your browser by querying the application server.
    - A mobile client to use the application from your phone by querying the application server.

### The Features !

  - The user registers are on the application can obtain an account by registering.
  - The registered user then confirms their enrollment on the application before being able to use it.
  - The application then asks the authenticated user to subscribe to Services.
  - The authenticated user composes AREA by interconnecting an Action to a REAction previously configured for service.
  - The action set on a service is triggered automaticaly and due the reaction.
  - The user can login within an account.

### Installation

AREA requires [Node.js](https://nodejs.org/) to run the backend.

Install the dependencies and devDependencies and start the server.

```sh
$ sudo apt-get install curl // node package
$ curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash - // Node.js package
$ sudo apt-get install nodejs // install nodejs
$ node -v & npm -v // For version // version of node & npm
```

AREA requires [React Native](https://facebook.github.io/react-native/) to run the frontend.

```sh
$ npm install -g expo-cli
```

// See with Florian pour lancement Docker & docker-compose 

### Technologies Use

AREA is currently extended with the following technologies. Instructions on how to use them in your own application are linked below.

| Plugin | Getting started |
| ------ | ------ |
| Docker | [Docker Tutorial](https://docs.docker.com/get-started/) |
| React | [React Tutorial](https://reactjs.org/docs/getting-started.html) |
| Node JS | [Node js Tutorial](https://nodejs.org/en/docs/guides/getting-started-guide/) |


### API Documentation

We used [Swagger](https://swagger.io/) that is an open-source software framework backed by a large ecosystem of tools that helps developers design, build, document, and consume RESTful web services.
The following link provides the API Structure for our project AREA : http://localhost:8080/api-docs/#/Users/post_user_signUp


### Development

The project consist two interfaces :

 - #### A web view :
    - Technoligies Uses :
      - We used Node JS foswaggerr the Web server background.
      - And for the front side, we used ReactJS.

 - #### A mobile view :
    - Technologies Uses :
      - We used Node JS for the Web server background, same as the web view.
      - And for the front side, we used React Native.

#### Authentifications

The project consist three ways of authentification for the Web view :
  - A Google Authentification (a way to sign in with a Google Account).
  - A Login Form that we created with an error handling, if you put an error to the login or password.


### MarkDown
Markdown
Toggle Zen Mode
Preview
Toggle Mode


Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.