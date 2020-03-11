const database = require('../tools/database');
const data = require('../tools/data');
const servicesJson = require('../services.json');

/**
 * @return {status}  200 Connected
 * @return {status}  400 Access denied
 * Display home page
 * @param req
 * @param res
 */
exports.homePage = (req, res) => {
    const user = database.currentUser();
    if (!user)
        return data.result(res, 400);
    return data.result(res, 200)
};

/**
 * @returns {Json Object}  Services formatted in Json
 * @returns {status}  401 not logged
 * @returns {status}  200 service getted
 * @returns {status}  400 service not getted
 * Get all services in collection firestore
 * @param req
 * @param res
 */
exports.getServices = (req, res) => {
    return data.result(res, 200, servicesJson)
};