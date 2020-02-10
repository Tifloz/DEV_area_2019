const database = require('./database.js')
const data = require('./data.js')
const servicesJson = require('../services.json')

/**
 * @param {Object}  Request object
 * @param {Object}  Result object
 * @return {status}  200 Connected
 * @return {status}  400 Access denied
 * Display home page
 */
exports.homePage = (req, res) => {
    const user = database.currentUser()
    if (!user)
        return data.result(res, 400)
    return data.result(res, 200)
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
exports.getServices = (req, res) => {
    return data.result(res, 200, servicesJson)
}