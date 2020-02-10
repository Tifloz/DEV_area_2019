const database = require('./database.js')
let data = require('./data.js')

/**
 * @returns {status} json response
 * Display auth Page
 * @param req
 * @param res
 */
exports.SignInPage = (req, res) => {
  return data.result(res, 200)
}
/**
 * @return {status} 200 ok
 * @return {status} 400 Bad Request
 * @return {status} 401 User pass wrong / not existing
 * Try SignIn the user
 * @param req
 * @param res
 */
exports.SignIn = (req, res) => {
  const { password, email } = req.body

  database.SignIn(email, password).then((status) => {
    return data.result(res, status, message[status])
  }).catch((e) => {
    console.log("error message: ", e.message)
  })
}

/**
 * @return {status} 200 ok
 * Display register form
 * @param req
 * @param res
 */
exports.SignUpPage = (req, res) => {
  return data.result(res, 200)
}

/**
 * @return {status} 200 ok
 * @returns {status} 400 error
 * Creation of user, in firebase auth() and firestore()
 * @param req
 * @param res
 */
exports.SignUp = (req, res) => {
  const { password, email } = req.body
  let data = {
    'email': email,
    'tasks': []
  }
  database.SignUp(email, password)
    .then((status) => {
      if (status === false)
        return data.result(res, 400)
      database.SignIn(email, password).then(() => {
        let user = database.currentUser();
        database.createDocument('Users', user.uid, data)
        return data.result(res, 200, message[200])
      })
    })
}

/**
 * @return {status} Json object
 * SignOut the user
 * @param req
 * @param res
 */
exports.signOut = (req, res) => {
  database.signOut()
    .then((status) => {
      return data.result(res, status, message[status])
    });
}

/** SigIn Google Account to firebase with tokenId */
exports.googleAuth = (req, res) => {
  /** Get token set in url and get credential */
  let token = req.body.tokenId
  let credential = firebase.auth.GoogleAuthProvider.credential(token)

  /** sigIn User with credential */
  firebase.auth().signInWithCredential(credential)
    .catch(() => {
      data.result(res, 400)
    })
    .then(() => {
      let user = firebase.auth().currentUser
      /** Create User in firestore */
      data = {
        'email': user.email,
        'facebook_token': "",
        'twitter_token': ""
      }
      database.createDocument('Users', user.uid, data).then((status) => {
        return result(res, 200)
      })
    })
}