const admin = require('firebase-admin');

let serviceAccount = require('../../firestore-service-account.json');

admin.apps.length? null : admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

export default function (req, res) {
  let userFavoritesRef = db.collection("favorites").doc(req.query.uid)
  //get request - getting the favorites object for a specific user:
  if(req.method === "GET"){
    let getUserFav = userFavoritesRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
        res.status(200).json({hasFavs: false})
      } else {
        console.log('Document data:', doc.data());
        res.status(200).json(doc)
      }
    })
  }
 
  //post request updating a favorite for a user:

  if(req.method === "POST"){
    let setUserFav = userFavoritesRef.set({
      [req.body.fontFamily]:[req.body.isFavorite]
    }, {merge:true})
    .then(ref => console.log("ref.data:", ref.data))
    .then(res.status(200))
    }
  }    
