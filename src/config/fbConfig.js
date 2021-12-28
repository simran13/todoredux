import firebase from 'firebase/compat/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

var firebaseConfig = {
  apiKey: "AIzaSyB3IcFdMdRZfqckkN4kb4njaKsFtukOElk",
  authDomain: "todoredux-30765.firebaseapp.com",
  projectId: "todoredux-30765",
  messagingSenderId: "302594840678",
  appId: "1:302594840678:web:17a2299b19e4186306b5a7",
  measurementId: "G-MTYM25S9RB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;