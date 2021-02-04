import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAjad5puwesXIHGZ0LDcSQvbEHC3ht9rng",
  authDomain: "portfoliodb-8e8ad.firebaseapp.com",
  projectId: "portfoliodb-8e8ad",
  storageBucket: "portfoliodb-8e8ad.appspot.com",
  messagingSenderId: "792324532420",
  appId: "1:792324532420:web:1e1653427fef11b5ebc191",
  measurementId: "G-F7E7567R3Y",
};
// Initialize Firebase
var firebaseApp = firebase.initializeApp(firebaseConfig);

var db = firebaseApp.firestore();

export { db };
