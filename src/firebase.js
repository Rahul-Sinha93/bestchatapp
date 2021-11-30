import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA_cwWuKC1OxOfklFAEJLzWbhvIFph9E80",
    authDomain: "bestchatapp-9950d.firebaseapp.com",
    projectId: "bestchatapp-9950d",
    storageBucket: "bestchatapp-9950d.appspot.com",
    messagingSenderId: "842621703343",
    appId: "1:842621703343:web:e3939bfc596232f3c9f05a"
  }).auth();