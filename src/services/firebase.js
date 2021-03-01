import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBt3jwDsxbQMmFefakAqjWs4QsnsPZsi_s",
  authDomain: "chatt-app-234fc.firebaseapp.com",
  projectId: "chatt-app-234fc",
  storageBucket: "chatt-app-234fc.appspot.com",
  messagingSenderId: "8397769437",
  appId: "1:8397769437:web:6a480d4c75a5cb14a3e934"
};

// Initialize Fireb  se
firebase.initializeApp(firebaseConfig);
export const firebas = firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
