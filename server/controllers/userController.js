const database = require('./database.js')
let message = []

message[200] = "ok"
message[400] = "Bad request"
message[401] = "User not logged"

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
 * @param {Object} Request Object
 * @param {Object} Response Object
 * @returns {status} json response
 * Display login Page
 */
exports.SignInPage = (req, res) => {
  return result(res, 200)
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
    console.log("status ", status)
    return result(res, status, message[status])
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
  return result(res, 200)
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
      // if error send error
      if (status === false)
        return result(res, 400)
      database.SignIn(email, password).then(() => {
        let user = database.currentUser();
        database.createDocument('Users', user.uid, data)
        return result(res, 200, message[200])
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
      return result(res, status, message[status])
    });
}