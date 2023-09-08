// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeFKz57W4YwVlcQEGtv33Vknp3trb9gqw",
  authDomain: "vtireactjs-ed1c9.firebaseapp.com",
  projectId: "vtireactjs-ed1c9",
  storageBucket: "vtireactjs-ed1c9.appspot.com",
  messagingSenderId: "586080499297",
  appId: "1:586080499297:web:04726d21f5461cb4b5dc20",
  measurementId: "G-GX53LFH836",
};

// Initialize Firebase
export const database = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
