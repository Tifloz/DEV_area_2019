const firebase = require("firebase/app")
require('firebase/auth')
require('firebase/firestore')

/** Create User in firestore inside firebase */
function createUser(email, id) {
  let db = firebase.firestore()
  let data = {
    email: email,
    services_id: [],
    widgets: [],
  }

  db.collection('Users').doc(id).get()
    .then(() => {
      db.collection('Users').doc(id).set(data)
        .catch((error) => {
          console.log('error Create User:'+ error)
        })
    })
}

/** display Login Form */
exports.loginPage = (req, res) => {
  if (req.cookies.error) {
    res.clearCookie('error')
    res.render('login', { error: true })
  }
  res.render('login')
}

/** Try to login the user */
exports.loginSubmit = (req, res) => {
  let email = req.body.email
  let password = req.body.password

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      res.redirect('/dashboard/home')
    })
    .catch(() => {
      res.cookie('error', true)
      res.redirect('/auth/login')
    })
}

/** Disconnect the user of Firebase */
exports.logout = (req, res) => {
  firebase.auth().signOut().then(() => {
    res.redirect('/auth/login')
  }).catch((error) => {
    console.log(error)
  })
}

/** Display register form */
exports.registerPage = (req, res) => {
  if (req.cookies.error) {
    res.clearCookie('error');
    res.render('register', { error: true })
  } else
    res.render('register')
}

/** Create User in Auth side and Firestore side on firebase */
exports.registerSubmit = (req, res) => {
  let email = req.body.email
  let password = req.body.password

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          user = firebase.auth().currentUser
          createUser(user.email, user.uid)
          res.redirect('/dashboard/home')
        })
      .catch(() => {
        res.cookie('error', true)
        res.redirect('/auth/register')
      })
    })
    .catch(() => {
      res.cookie('error', true)
      res.redirect('/auth/register')
    })
}

/** SigIn Google Account to firebase with tokenId */
exports.googleAuth = (req, res) => {
  /** Get token set in url and get credential */
  let token = req.params.token
  let credential = firebase.auth.GoogleAuthProvider.credential(token)

  /** sigIn User with credential */
  firebase.auth().signInWithCredential(credential)
    .catch(() => {
      res.cookie('error', true)
      res.redirect('/auth/login')
    })
    .then(() => {
      user = firebase.auth().currentUser
      /** Create User in firestore */
      createUser(user.email, user.uid);
      res.redirect('/dashboard/home')
    })
}