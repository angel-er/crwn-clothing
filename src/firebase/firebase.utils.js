import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import 'firebase/storage';
// import 'firebase/database';

const config = {
  apiKey: "AIzaSyCPWLiShuRJ6O848p5KXKb2vOTJUuY6aMY",
  authDomain: "crwn-db-fe350.firebaseapp.com",
  databaseURL: "https://crwn-db-fe350.firebaseio.com",
  projectId: "crwn-db-fe350",
  storageBucket: "crwn-db-fe350.appspot.com",
  messagingSenderId: "915059312481",
  appId: "1:915059312481:web:c2b8b446c65f5b4e036720",
  measurementId: "G-XY877ZQYZ7"
};

firebase.initializeApp(config);
// firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const useRef = firestore.doc('users/7JXRQNCMB3KuIirMGHzV');

  const snapShot = await useRef.get()
  console.log('ire', firestore.doc(snapShot))
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
