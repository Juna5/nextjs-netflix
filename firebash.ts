// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbmYYxHVPmej4f2tNaYiT12D-2u2ZWaZs",
    authDomain: "nextjs-netflix-16a44.firebaseapp.com",
    projectId: "nextjs-netflix-16a44",
    storageBucket: "nextjs-netflix-16a44.appspot.com",
    messagingSenderId: "237731351931",
    appId: "1:237731351931:web:8c2aaac35d280dcdbd81de",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
