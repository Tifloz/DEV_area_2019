const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

/**
 * @param {String}  Collection Name
 * @param {String}  Id of document
 * Create a document with optionnaly an id and data
 */
exports.createDocument = async (collection_name, id, data) =>
{
  let db = firebase.firestore()

  if (id === undefined)
    db.collection(collection_name).doc().set(data)
  else
    db.collection(collection_name).doc(id).set(data)
}

/**
 * @param {String}  Collection Name
 * @param {String}  Id of document
 * @returns {Bool} if error => false
 * Update an existing document
 */
exports.updateDocument = async (collection_name, id, data) =>
{
  let db = firebase.firestore()

  console.log('for collection ', collection_name, ' with id ', id, ' set data: ', data)

  if (data === undefined || id === undefined)
    return false
  db.collection(collection_name).doc(id).update(data)
    .then(() => {
      return true;
    })
    .catch((e) => {
      console.log('error updateDocument: ', e)
      return false;
    });
  return true
}

/**
 * @param {String}  Collection Name
 * @param {[String]}  Array of documents id
 * @returns {Array} documents data
 * Get all documents with the same id as in the array
 */
exports.getDocuments = async (collection_name, id_array) =>
{
  let db = firebase.firestore()
  let ref = db.collection(collection_name);
  let data = [];

  return ref.get()
    .then(snapshot => {
        if (snapshot.empty)
          return data
        snapshot.forEach(doc => {
            if (id_array.includes(doc.id))
              data.push(doc.data());
        });
        return data
    })
    .catch(e => {
      console.log("error getDocuments: ", e.message)
      return []
    });
}

/**
 * @param {String}  Collection Name
 * @param {String}  Document id
 * @returns {Array} Document data
 * Get the document from firebase firestore with his id
 */
exports.getDocument = async (collection_name, id) =>
{
  let db = firebase.firestore()
  let ref = db.collection(collection_name).doc(id)

  return ref.get()
    .then(doc => {
      if (!doc.exists)
        return null
      else
        return doc.data()
    })
    .catch(e => {
      console.log('Error getting document', e);
      return null
    });
}

/**
 * @param {String}  Collection Name
 * @returns {Array} Document's datas
 * Get all documents from a firebase collection
 */
exports.getAllDocuments = async (collection_name) =>
{
  let db = firebase.firestore()
  let collectionRef = db.collection(collection_name)
  let documents = [];

  return collectionRef.get()
      .then(snapshot => {
          if (snapshot.empty) {
              return ([])
          }
          snapshot.forEach(doc => {
            documents.push(doc.data());
          });
          return (documents)
      })
      .catch(e => {
          console.log('Error getAllDocuments: ', e);
          return ([])
      });
}

/**
 * @param {String}  Collection Name
 * @param {String}  Document id
 * Delete a document in firestore()
 */
exports.deleteDocument = async (collection_name, id) =>
{
  let db = firebase.firestore()

  db.collection(collection_name).doc(id).delete();
}

/**
 * @param {String}  Collection Name
 * @param {[String]}  Documents id
 * Remove all documents with the id inside array_id
 */
exports.deleteDocuments = async (collection_name, array_id) =>
{
  let db = firebase.firestore()

  array_id.forEach(id => {
    db.collection(collection_name).doc(id).delete();
  })
}

/**
 * @returns {Bool} Error => false
 * Delete the current user in firestore() / auth()
 */
exports.deleteUser = async () =>
{
  var user = firebase.auth().currentUser;
  let id = user.uid;

  return user.delete().then(function() {
    deleteDocument('Users', id)
    return true;
  }).catch((e) => {
    console.log('error deleteUser: ', e.message)
    return false
  });
}

/**
 * @param {String}  User's email
 * @param {String}  User's password
 * @returns {Integer} 400/401 => error
 * @returns {Integer} 200 => ok
 * SignIn the user
 */
exports.SignIn =  async (email, password) =>
{
  if (!email || !password)
    return 400
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      return 200
    }).catch((e) => {
      console.log('error signIn: ', e.message)
      return 401
    })
}

/**
 * @param {String}  User 's email
 * @param {String}  User's password
 * @returns {Bool} Successfull or not
 * Create auth user
 */
exports.SignUp = async (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
          return true
    })
    .catch((e) => {
        console.log('error signUp: ', e.message)
        return (false)
    })
}

/**
 * SignOut the authentified user
 * @returns {Integer} 200 => ok
 * @returns {Integer} 400 => error
 */
exports.signOut = async () =>
{
  return firebase.auth().signOut()
    .then(() => {
      return (200)
    }).catch((e) => {
      console.log("error signOut: ", e.message)
      return (400)
    })
}

/**
 * @returns {Object} User
 * return the current user authentified
 */
exports.currentUser = () => {
  return firebase.auth().currentUser
}