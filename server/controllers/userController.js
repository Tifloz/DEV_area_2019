
const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

const database = require('./firebaseTools.js')

/**
 * @param {Object}  Result object
 * @param {integer} Code status
 * @param {string}  Message who will be send
 * @returns {Status}
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
 * @returns {bool} True user generated
 * @returns {bool} False user not generated
 * This function generate a user document into firestore database
 */
function createUser(email, id) {
    let data = {
      email: email,
      tasks: []
    }

    database.createDocument('Users', id, data)
      .then((status)=> { return status } )
}

/**
 * @param {Object} Request Object
 * @param {Object} Response Object
 * @returns {status} json response
 * Display login Page
 */
exports.SignInPage = (req, res) => {
  return (result(res, 200))
}

/**
 * @param {Object}  Result object
 * @param {Object}  Request object
 * @return {status} 200 ok
 * @return {status} 400 Bad Request
 * @return {status} 401 User pass wrong / not existing
 * Try SignIn the user
 */
exports.SignIn = (req, res) => {
  const { password, email } = req.body
  if (!email || !password)
    return (result(res, 400, 'Bad Request'))
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
      return result(res, 401, 'Unauthorized')
    })
}

/**
 * @param {Object}  Result object
 * @param {Object}  Request object
 * @return {status} 200 ok
 * Display register form
 */
exports.SignUpPage = (req, res) => {
  return (result(res, 200))
}

/**
 * @param {Object}  Result object
 * @param {Object}  Request object
 * @return {status} 200 ok
 * @returns {status} 400 error
 * Creation of user, in firebase auth() and firestore()
 */
exports.SignUp = (req, res) => {
  const { password, email } = req.body

  // try adding new user inside auth()
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      // SignIn the user if succefully created
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          user = firebase.auth().currentUser
          createUser(user.email, user.uid)
          res.set('token', user.uid);
          return res.status(200).json({
            text: "Succesfully sign Up",
          })
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
 * @return {status} Json object
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
 * @returns {status} 400 error
 * @returns {status} 200 ok
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
      return (result(res, 200, 'logged'))
    })
    .catch((error) => {
      return (result(res, 400, error.message))
    })
}

/**
 * @param {Object}  Result object
 * @param {Object}  Request object
 * @returns {JSon Object} User Tasks
 * This function return the user's tasks
 */
exports.getTasks = (req, res) => {

  database.getDocument('Users', 'p0SRzYGHr3PHQag8XCYOPUBk9lr2')
    .then((user) => {
      if (user.tasks === [])
        console.log('no user tasks');
      database.getDocuments('Tasks', user.tasks)
        .then((tasks) => {
          console.log('get tasks: ', tasks);
        })
      return result(res, 200, 'ok');
    })
    .catch((e) => {
      return result(res, 400, 'ko');
    })
}