import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAaLkJHIpmT58OhPn33DmRxPT02Tvh8OLc",
    authDomain: "magickrate-c6f33.firebaseapp.com",
    databaseURL: "https://magickrate-c6f33.firebaseio.com",
    projectId: "magickrate-c6f33",
    storageBucket: "magickrate-c6f33.appspot.com",
    messagingSenderId: "93061605792",
    appId: "1:93061605792:web:414e510fb01cbe0cf2dcc5",
    measurementId: "G-DVWSSD47QM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;