const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

/**
 * @param {Object}  Result object
 * @param {integer} Code status
 * @param {string}  Message who will be send
 * This function return the result formatted
 */
function result(res, code, message) {
  return res.status(code).json({
    text: message,
  })
}

/**
 * @param {string}  Correspond to user's email
 * @param {string}  Correspond to the id of the firebase.auth() created
 * This function generate a user document into firestore database
 */
function createUser(email, id) {
  let db = firebase.firestore()
  let data = {
    email: email,
  }
  // create a document instance
  db.collection('Users').doc(id).get()
    .then(() => {
      // set data into document instant to make it permanent
      db.collection('Users').doc(id).set(data)
        .catch((error) => {
          console.log('error Create User:'+ error.message)
        })
    })
}

/**
 * Display login Page
 */
exports.SignInPage = async (req, res) => {
  return (result(res, 200))
}

/**
 * @param {Object}  Result object
 * @param {Object}  Request object
 * Try SignIn the user
 */
exports.SignIn = async (req, res) => {
  const { password, email } = req.body
  if (!email || !password)
    return (result(res, 400, 'invalid request'))
  // try signin the user with auth()
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      var user = firebase.auth().currentUser;
      res.set('token', user.uid);
      return res.status(200).json({
        text: "Succesfully logged",
      })
    })
    .catch((error) => {
      return result(res, 401, error.message)
    })
}

/**
 * @param {Object}  Result object
 * @param {Object}  Request object
 * Display register form
 */
exports.SignUpPage = async (req, res) => {
  return (result(res, 200))
}

/**
 * @param {Object}  Result object
 * @param {Object}  Request object
 * Creation of user, in firebase auth() and firestore()
 */
exports.SignUp = async (req, res) => {
  const { password, email } = req.body

  // try adding new user inside auth()
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      // SignIn the user if succefully created
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          user = firebase.auth().currentUser
          createUser(user.email, user.uid)
          return (result(res, 200, 'Successfully created!'))
        })
      .catch((error) => {
        return (result(res, 400, error.message))
      })
    })
    .catch((error) => {
      return (result(res, 400, error.message))
    })
}

/**
 * @param {Object}  Result object
 * @param {Object}  Request object
 * SignOut the user
 */
exports.signOut = (req, res) => {
  firebase.auth().signOut().then(() => {
    return (result(res, 200, 'Successfully disconnected'))
  }).catch((error) => {
    return (result(res, 200, error.message))
  })
}

/**
 * @param {Object}  Result object
 * @param {Object}  Request object
 * SignIn the user with the user's token passed as parameter
 */
exports.signInWithGoogle = (req, res) => {
  /** Get token set in url and get credential */
  let token = req.params.token
  let credential = firebase.auth.GoogleAuthProvider.credential(token)

  /** sigIn User with credential */
  firebase.auth().signInWithCredential(credential)
    .then(() => {
      user = firebase.auth().currentUser
      /** Create User in firestore */
      createUser(user.email, user.uid)
      return (result(res, 200))
    })
    .catch((error) => {
      return (result(res, 400, error.message))
    })
}