// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7V_2ZbqwSvsnxTbMi-KmME2dnsHbHjBk",
  authDomain: "final-ra66.firebaseapp.com",
  projectId: "final-ra66",
  storageBucket: "final-ra66.appspot.com",
  messagingSenderId: "118702111975",
  appId: "1:118702111975:web:d00f07a40b4af429753642",
  measurementId: "G-SWGZKT67ML",
};

// //* Initialize Firebase
export const app = initializeApp(firebaseConfig);

// //* Initialize Firebase Authentication and get a reference to the service
export const database = getAuth(app);
export const analytics = getAnalytics(app);
