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
        text: message
    });
}

/**
 * @param {Object}  Request object
 * @param {Object}  Result object
 * Display home page
 */
exports.homePage = async (req, res) => {
    const user = firebase.auth().currentUser
    if (!user)
        return result(res, 400, 'Please SignIn')
    return result(res, 200, 'welcome to home page!')
}