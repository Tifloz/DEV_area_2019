const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

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
 * @param {uid} User uid
 * @returns {Array} tasks id for user
 * @returns {null} no tasks
 */
function getUserTasks(uid)
{
    let db = firebase.firestore()
    let result = db.collection('Users').doc(uid).get()
        .then((result) => {
            const tasks = result.data().tasks
            if (tasks) {
                return (tasks);
            }
        })
        .catch ((err) => {
            console.log('no documents');
            return (null);
        })
}

/**
 * @param {Object}  Request object
 * @param {Object}  Result object
 * @returns {status}  400 not logged
 * @returns {status}  200 task generated
 * @returns {status}  401 task not generated
 * Create Task for user logged
 */
exports.createTask = (req, res) => {
    const user = firebase.auth().currentUser
    if (!user)
        return result(res, 401, 'Error user not logged')
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
    let services = []
    let db = firebase.firestore()
    let servicesRef = db.collection('Services');
    servicesRef.get()
        .then(snapshot => {
            if (snapshot.empty) {
                return (result(res, 400, "No Services"))
            }
            snapshot.forEach(doc => {
                services.push(doc.data());
            });
            jsonServices = JSON.stringify(services)
            res.setHeader('Content-Type', 'application/json');
            res.write(jsonServices)
            return (result(res, 200, "Matching Service list"))
        })
        .catch(err => {
            return (result(res, 400, "No Services"))
        });
}