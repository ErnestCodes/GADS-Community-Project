import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqCBiHYGAHS2QFQawMYa1uvDrC1hVgj0M",
  authDomain: "abacus-47e6d.firebaseapp.com",
  databaseURL: "https://abacus-47e6d.firebaseio.com",
  projectId: "abacus-47e6d",
  storageBucket: "abacus-47e6d.appspot.com",
  messagingSenderId: "141215210174",
  appId: "1:141215210174:web:aac39ca8566614a3971cef",
  measurementId: "G-0GDVPWWR47",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
