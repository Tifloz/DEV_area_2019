const database = require('./database.js')
let data = require('./data.js')
const servicesJson = require('../services.json');

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

  database.SignIn(email, password).then(() => {
    return data.result(res, 200, {"token": database.currentUser().uid})
  }).catch(() => {
    return data.result(res, 401, {'error': "wrong username or password"})
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
  let data_user = {
    'email': email,
    'first_name': req.body.fName,
    'last_name': req.body.lName,
    'twitter_token': ""
  }
  database.SignUp(email, password)
    .then((status) => {
      if (status === false) {
        return data.result(res, 400, "User already existing" )
      }
      database.SignIn(email, password)
        .then(() => {
            let user = database.currentUser();
            database.createDocument('User', user.uid, data_user).then(() => {
              return data.result(res, 200, {"token": user.uid })
            })
            return data.result(res, 200, {"token": user.uid })
        })
    })
    .catch((e) => {
      return data.result(res, 400, e.message)
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
      return data.result(res, status, "signed Out")
    });
}

/** SigIn Google Account to firebase with tokenId */
exports.googleAuth = (req, res) => {
  /** Get token set in url and get credential */
  let token = req.body.tokenId
  database.googleAuth(token).then((status) => {
      let user = database.currentUser()
      let userdata = {
        'email': user.email,
        'first_name': req.body.fName,
        'last_name': req.body.lName,
        'twitter_token': ""
      }
      database.createDocument('User', user.uid, userdata).then(() => {
        return data.result(res, 200,  {'token': user.uid})
      }).catch((e) => {
        return data.result(res, 200,  {'token': user.uid})
      })
  }).catch((e) => {
    return data.result(res, 400, {'error': e.message })
  })
}

exports.getUserAreas = (req, res) => {
  /** Get token set in url and get credential */
  let user_id = req.params.user_id

  database.getDocumentWhere("Area", "user_id", user_id).then((result) => {
    data.result(res, 200, result)
  }).catch((e) => {
    data.result(res, 200, [])
  })
}

exports.getUserAreaTrigger = (req, res) => {
  let area_id = req.params.area_id
  database.getDocument('Area', area_id)
    .then((doc) => {
        if (doc.trigger_id === undefined)
          return data.result(res, 400, "Not founded")
        database.getDocument('Service', doc.trigger_id)
        .then((service) => {
            return data.result(res, 200, service)
        })
    })
    .catch((err) => {
      return data.result(res, 400, "Not founded")
    })
}

exports.getUserAreaEvent = (req, res) => {
  let area_id = req.params.area_id
  database.getDocument('Area', area_id)
    .then((doc) => {
        if (doc.event_id === undefined)
          return data.result(res, 400, "Not founded")
        database.getDocument('Service', doc.event_id)
        .then((service) => {
            return data.result(res, 200, service)
        })
    })
    .catch((err) => {
      return data.result(res, 400, "Not founded")
    })
}

exports.createUserArea = (req, res) => {
  database.getDocument('User', req.params.user_id)
  .then((user) => {
    if (user === null)
      return data.result(res, 400, "User not existing")
    let area = {
      "user_id": req.params.user_id,
      "event": {
        "service": "Twitter",
        "action": req.body.action,
      },
      "trigger": {
        "service": "Mail",
        "reaction": req.body.reaction,
      }
    }
    database.createDocument('Area', null, area)
    return data.result(res, 200, {'message': 'Areas successfully created'})
  }).catch((e) => {
    console.log('error: createAreas: ', e.message)
    return data.result(res, 400, {'error': 'An error occur while creating area'})
  })
}

exports.getUserArea = (req, res) =>  {
  database.getDocument('Area', req.params.area_id)
    .then((area) => {
      return data.result(res, 200, {"area": area})
    })
    .catch((err) => {
      return data.result(res, 400, {"area": [], "error": "Area not founded"})
    })
}

exports.getUserTwitterToken = (req, res) =>
{
  database.getDocument('User', req.params.user_id).then((user) => {
    return data.result(res, 200, {'twitter_token': user['twitter_token']})
  })
  .catch((e) => {
    return data.result(res, 200, {'twitter_token': ""})
  })
}

exports.putUserTwitterToken = (req, res) => {
  database.getDocument('User', req.params.user_id)
    .then((user) => {
      user['twitter_token'] = req.body.twitter_token
      database.updateDocument('User', req.params.user_id, user)
      return data.result(res, 200, "User twitter token updated")
    })
}