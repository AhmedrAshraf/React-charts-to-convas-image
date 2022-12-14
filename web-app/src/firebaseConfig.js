import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"

const firebaseConfig = {
    apiKey: "AIzaSyAprFIVWffQkHLnxu24027_9H4glli9W6o",
    authDomain: "e2steam5.firebaseapp.com",
    projectId: "e2steam5",
    storageBucket: "e2steam5.appspot.com",
    messagingSenderId: "637036928403",
    appId: "1:637036928403:web:682d2ffdb8a6ccee795c66",
};

export const app = initializeApp(firebaseConfig); // Intializing the app
export const auth = getAuth(app); // Gettting Authentication
export const db = getFirestore(app); // Getting Firestore
export const functions = getFunctions(app); // Getting Cloud Functions
