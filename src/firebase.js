import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBXgzW-1Fxtj-LGoUrJn2gOHhs92R8qKFo",
  authDomain: "first-clone-f0859.firebaseapp.com",
  projectId: "first-clone-f0859",
  storageBucket: "first-clone-f0859.appspot.com",
  messagingSenderId: "437348811779",
  appId: "1:437348811779:web:577a41f85284c0aaa37a36",
  measurementId: "G-1MCH0E4Y95",
});

// const db = firebaseApp.firebase(); //
const auth = firebase.auth();

export { auth }; //db, auth define only auth db is not use
