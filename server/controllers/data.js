/**
 * @param {Object}  Result object
 * @param {integer} Code status
 * @param {string}  Message who will be send
 * @return {status}  Json Response
 * This function return the result formatted
 */
exports.result = (res, code, data) => {
    return res.status(code).json(data);
}