import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC5wDGuZ5SLv6RHt-YIHLZIm9ZCOkaZvTo",
  authDomain: "buon-sapore-bruno.firebaseapp.com",
  databaseURL: "https://buon-sapore-bruno.firebaseio.com",
  projectId: "buon-sapore-bruno",
  storageBucket: "buon-sapore-bruno.appspot.com",
  messagingSenderId: "388222118182"
  }

  firebase.initializeApp(config);

  const db = firebase.database();
  console.log(db);

  const dbRef = db.ref();

  dbRef.on('value', snapshot => {
    console.log(snapshot.val());
  });

export default firebase;
