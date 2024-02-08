// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDra0UOWk7UMvdBCewjRP6OErZRsVLqmPA",
  authDomain: "netflixgpt-91875.firebaseapp.com",
  projectId: "netflixgpt-91875",
  storageBucket: "netflixgpt-91875.appspot.com",
  messagingSenderId: "873058030881",
  appId: "1:873058030881:web:470443f5dae78c3580da60",
  measurementId: "G-BFQGMDEH9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
