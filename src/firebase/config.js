// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmjx2kRPHjaHP6QJtnQts4OFbCxwcv8zU",
    authDomain: "react-cursos-ae7e7.firebaseapp.com",
    projectId: "react-cursos-ae7e7",
    storageBucket: "react-cursos-ae7e7.appspot.com",
    messagingSenderId: "475679277408",
    appId: "1:475679277408:web:a74d7daba6be34ef885e05"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp)

export const FirebaseDB = getFirestore(FirebaseApp)