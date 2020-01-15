const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')


exports.createDocument = async (collection_name, id, data) =>
{
  let db = firebase.firestore()
  // create a document instance
  db.collection(collection_name).doc(id).get()
    .then(() => {
      // set data into document instant to make it permanent
      db.collection(collection_name).doc(id).set(data)
        .then(() => { return true } )
        .catch((error) => {
          console.log('error Create User:'+ error.message)
          return false
        })
    })
}

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
    .catch(err => {
      return []
    });
}

exports.getDocuments = async (collection_name, id) =>
{
  let db = firebase.firestore()
  let ref = db.collection(collection_name).doc(id)

  return ref.get()
    .then((res) => {
        console.log('inside res, user data:', res.data())
        return res.data()
    })
    .catch((e) => {
      console.log('catch getDocument:', err.message)
      return []
    });
}

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
      .catch(err => {
          return ([])
      });
}