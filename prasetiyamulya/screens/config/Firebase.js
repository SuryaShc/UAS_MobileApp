
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBx8eN51KUhH6hmjbbZmPoxbw4504-QqNA",
    authDomain: "finalproject-a1848.firebaseapp.com",
    projectId: "finalproject-a1848",
    storageBucket: "finalproject-a1848.appspot.com",
    messagingSenderId: "610137346643",
    appId: "1:610137346643:web:f7094c30f10f1da2f46ca6",
    measurementId: "G-RBYM2CHJRL"
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase