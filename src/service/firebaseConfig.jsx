// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN-4uEKjTq8pRmvTHemG1zDFYNn8zm9vQ",
  authDomain: "travelapp-167ac.firebaseapp.com",
  projectId: "travelapp-167ac",
  storageBucket: "travelapp-167ac.appspot.com",
  messagingSenderId: "458868414574",
  appId: "1:458868414574:web:86119fd21de371def46e7f",
  measurementId: "G-8VYL25786J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);