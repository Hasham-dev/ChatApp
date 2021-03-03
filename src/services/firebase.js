import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCCVOVAznEQUOejpGe5Worq2YS9MWSXP0Y",
  authDomain: "chattweb-hv.firebaseapp.com",
  projectId: "chattweb-hv",
  storageBucket: "chattweb-hv.appspot.com",
  messagingSenderId: "138045393049",
  appId: "1:138045393049:web:c29c22b1bea4c729b09008",
  measurementId: "G-9GSJG0NWQ4"
};

// Initialize Fireb  se
firebase.initializeApp(firebaseConfig);
export const firebas = firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
