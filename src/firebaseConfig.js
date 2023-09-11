// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuejVK6hsJ7BIWVJbc9Ne_8dP1Q7MkBUM",
  authDomain: "reactjsvtira66.firebaseapp.com",
  projectId: "reactjsvtira66",
  storageBucket: "reactjsvtira66.appspot.com",
  messagingSenderId: "193734746323",
  appId: "1:193734746323:web:0968d5a6d95e19c5a0f426",
  measurementId: "G-MF159HRRWL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const database = getAuth(app);

const analytics = getAnalytics(app);
