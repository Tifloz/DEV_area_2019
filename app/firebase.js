const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

/** InitializeRoutes initialize app routes */
exports.InitializeFirebase = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDGo9AJU-AxcnDLp1fB06jFWwmAYRYyrQw",
      authDomain: "area-epitech59.firebaseapp.com",
      databaseURL: "https://area-epitech59.firebaseio.com",
      projectId: "area-epitech59",
      storageBucket: "area-epitech59.appspot.com",
      messagingSenderId: "220501398447",
      appId: "1:220501398447:web:1dd4615e689ce34e1f555a",
      measurementId: "G-GSC4PFXQSJ"
    };
    firebase.initializeApp(firebaseConfig)
};