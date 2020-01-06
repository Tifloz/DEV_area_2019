const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

/** InitializeRoutes initialize app routes */
exports.InitializeFirebase = () => {
    const firebaseConfig = {
        apiKey: 'AIzaSyBjUA-UCKXTpvDfg10Yu99KHIO8xD1sxGA',
        authDomain: 'dashboard-ccc.firebaseapp.com',
        databaseURL: 'https://dashboard-ccc.firebaseio.com',
        projectId: 'dashboard-ccc',
        storageBucket: 'dashboard-ccc.appspot.com',
        messagingSenderId: '354289342941',
        appId: '1:354289342941:web:b6047f1c0a6d8e1585fe34',
        measurementId: 'G-Y0MF0WDKYV'
      }
      firebase.initializeApp(firebaseConfig)
};