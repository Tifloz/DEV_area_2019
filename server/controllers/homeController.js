const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

const database = require('./firebaseTools.js')

/**
 * @param {Object}  Result object
 * @param {integer} Code status
 * @param {string}  Message who will be send
 * @return {status}  Json Response
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
 * @return {status}  200 Connected
 * @return {status}  400 Access denied
 * Display home page
 */
exports.homePage = (req, res) => {
    const user = firebase.auth().currentUser
    if (!user)
        return result(res, 400, 'Please SignIn')
    return result(res, 200, 'welcome to home page!')
}

/**
 * @param {Object}  Request object
 * @param {Object}  Result object
 * @returns {status} 200 Success
 * @returns {status} 400 Error not logged
 * Create Task for user logged
 */
exports.createTask = (req, res) => {
    const user = firebase.auth().currentUser
    if (!user)
        return result(res, 401, 'Error user not logged');
    return result(res, 200, 'welcome to home page!')
}

/**
 * @param {Object}  Request object
 * @param {Object}  Result object
 * @returns {Json Object}  Services formatted in Json
 * @returns {status}  401 not logged
 * @returns {status}  200 service getted
 * @returns {status}  400 service not getted
 * Get all services in collection firestore
 */
exports.getAllServices = (req, res) => {
    const user = firebase.auth().currentUser
    if (!user)
        return result(res, 401, 'Error user not logged')
    database.getAllDocuments('Services')
        .then((services) => {
            if (services === [])
                return (result(res, 200, "No Services"))
            jsonServices = JSON.stringify(services)
            res.setHeader('Content-Type', 'application/json')
            res.write(jsonServices)
            return (result(res, 200, 'Matching Service list'))
        })
        .catch((e) => {
            console.log('An error occur in getAllServices: ', e.message)
            return (result(res, 200, 'No services'))
        })
}