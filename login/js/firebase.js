/*
  CCTB Website Development
  IST105
  Oct 2024
  Description: This is a simple login website where students are asked to 
  implement Social Network Login with Firebase
*/

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK1vvbiZkVD-D5X-yjXJvTF7jW5UcoIAk",
  authDomain: "portfolio-v1-megumikushida.firebaseapp.com",
  projectId: "portfolio-v1-megumikushida",
  storageBucket: "portfolio-v1-megumikushida.appspot.com",
  messagingSenderId: "99578842328",
  appId: "1:99578842328:web:0ea3cfe251305db1e71bad",
  measurementId: "G-M11CBPQWB1"
};

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();


