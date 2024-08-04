// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7_unPbvDUHhIbEc21CKIkvBEFjPga5i8",
  authDomain: "pantry-manage-e4d7c.firebaseapp.com",
  projectId: "pantry-manage-e4d7c",
  storageBucket: "pantry-manage-e4d7c.appspot.com",
  messagingSenderId: "89900916098",
  appId: "1:89900916098:web:279bfeebac8e2242ef439b",
  measurementId: "G-LPXC8544TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};