// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPDJMFaUQDAAOy9LXEE7Snj3KMlfTXcog",
  authDomain: "vcard-24d28.firebaseapp.com",
  projectId: "vcard-24d28",
  storageBucket: "vcard-24d28.appspot.com",
  messagingSenderId: "434844366531",
  appId: "1:434844366531:web:58a2b0c00a937fcdc71476"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;