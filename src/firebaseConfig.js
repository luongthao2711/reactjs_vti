// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD3ptL1WFyFjmGvHL4sre90mMjrjer6C4",
  authDomain: "projectfinal-3788a.firebaseapp.com",
  projectId: "projectfinal-3788a",
  storageBucket: "projectfinal-3788a.appspot.com",
  messagingSenderId: "627070270212",
  appId: "1:627070270212:web:3e14a8d79fe0e245f16e51",
  measurementId: "G-T7DCTS4WJ0"
};

//* Initialize Firebase
export const app = initializeApp(firebaseConfig);

//* Initialize Firebase Authentication and get a reference to the service
export const database = getAuth(app);
export const analytics = getAnalytics(app);
