// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcjq2gwdf1NEdXtqMMPmzjACH5qyg-rVw",
  authDomain: "foodflow-8400c.firebaseapp.com",
  projectId: "foodflow-8400c",
  storageBucket: "foodflow-8400c.appspot.com",
  messagingSenderId: "754464728081",
  appId: "1:754464728081:web:95ce9f58305bcb72083db0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;