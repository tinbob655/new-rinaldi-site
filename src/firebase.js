//setup firebase app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export function setupFirebase() {
    const firebaseConfig = {
    apiKey: "AIzaSyACbMoREafR0it2VdIjyFSCzgEXiG_C19I",
    authDomain: "newrinaldi-82cfd.firebaseapp.com",
    projectId: "newrinaldi-82cfd",
    storageBucket: "newrinaldi-82cfd.appspot.com",
    messagingSenderId: "437178743447",
    appId: "1:437178743447:web:3be3ed5f8a5ec6557c07d2",
    measurementId: "G-651LZ675X9"
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);
};