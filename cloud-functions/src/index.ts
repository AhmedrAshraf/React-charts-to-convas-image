import { exportFunctions } from "better-firebase-functions";
import { initializeApp } from 'firebase/app';
import { initializeApp as adminInitialize } from 'firebase-admin/app';

const firebaseConfig = {
    apiKey: "AIzaSyAprFIVWffQkHLnxu24027_9H4glli9W6o",
    authDomain: "e2steam5.firebaseapp.com",
    projectId: "e2steam5",
    storageBucket: "e2steam5.appspot.com",
    messagingSenderId: "637036928403",
    appId: "1:637036928403:web:682d2ffdb8a6ccee795c66"
};

export const app = initializeApp(firebaseConfig);
export const adminApp = adminInitialize(firebaseConfig);

exportFunctions({ __filename, exports });
