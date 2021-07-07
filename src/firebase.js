import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9NAdXQSKLsFrD6DqEyAy20noKCJ8BB2Y",
  authDomain: "disneyplus-clone-d1877.firebaseapp.com",
  projectId: "disneyplus-clone-d1877",
  storageBucket: "disneyplus-clone-d1877.appspot.com",
  messagingSenderId: "1008411950500",
  appId: "1:1008411950500:web:61768ab792e971f3c2d531",
  measurementId: "G-H0B8HM9HLY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
