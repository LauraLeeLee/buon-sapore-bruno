import firebase from 'firebase';
import { ApiKey, AuthDomain, DatabaseURL, ProjectId,
        StorageBucket, MessagingSenderId } from '../../data/credentials.js';

const config = {
  apiKey: ApiKey,
  authDomain: AuthDomain,
  databaseURL: DatabaseURL,
  projectId: ProjectId,
  storageBucket: StorageBucket,
  messagingSenderId: MessagingSenderId
  }

  firebase.initializeApp(config);

  const db = firebase.database();
  console.log(db);

  const dbRef = db.ref();

  dbRef.on('value', snapshot => {
    console.log(snapshot.val());
  });

export default firebase;
