import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCB9PW7J0PWXRON_xZ2N-iHxu3Quje7E14",
  authDomain: "crw-db-c14d8.firebaseapp.com",
  databaseURL: "https://crw-db-c14d8.firebaseio.com",
  projectId: "crw-db-c14d8",
  storageBucket: "crw-db-c14d8.appspot.com",
  messagingSenderId: "270267820984",
  appId: "1:270267820984:web:845bffcb6684b1a9a77d4d",
  measurementId: "G-1ZHF2WHYMH"
};

firebase.initializeApp( config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;