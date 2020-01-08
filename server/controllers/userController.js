/** display Login Form */
exports.loginPage = async (req, res) => {
  console.log('inside login page')
  return res.status(200)
}

/** Try to login the user */
exports.loginSubmit = async (req, res) => {
  console.log('try login')
  return res.status(200)
}