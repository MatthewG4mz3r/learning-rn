import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { Alert } from 'react-native';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAU3cMDhioExZjvXqZ2TB0QGZQ32xvHWcY",
  authDomain: "fuse-8586c.firebaseapp.com",
  projectId: "fuse-8586c",
  storageBucket: "fuse-8586c.appspot.com",
  messagingSenderId: "441075377342",
  appId: "1:441075377342:web:e872c04c47e8832bb32aef",
  measurementId: "G-9PFD1DNE9D"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);