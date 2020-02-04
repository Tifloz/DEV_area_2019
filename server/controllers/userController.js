const database = require('./database.js')
const data = require('./data.js')

/**
 * @param {Object} Request Object
 * @param {Object} Response Object
 * @returns {status} json response
 * Display auth Page
 */
exports.SignInPage = (req, res) => {
  return data.result(res, 200)
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

  database.SignIn(email, password).then((status) => {
    return data.result(res, status, message[status])
  }).catch((e) => {
    console.log("error message: ", e.message)
  })
}

/**
 * @param {Object}  Result object
 * @param {Object}  Request object
 * @return {status} 200 ok
 * Display register form
 */
exports.SignUpPage = (req, res) => {
  return data.result(res, 200)
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
 * @param {Object}  Result object
 * @param {Object}  Request object
 * @return {status} Json object
 * SignOut the user
 */
exports.signOut = (req, res) => {
  database.signOut()
    .then((status) => {
      return data.result(res, status, message[status])
    });
}