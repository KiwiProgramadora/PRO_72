import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCO3Xw2vCUrG6kYjRpZkkY-zF6aiteoGC4",
  authDomain: "the-end-of-hatsune--miku.firebaseapp.com",
  projectId: "the-end-of-hatsune--miku",
  storageBucket: "the-end-of-hatsune--miku.appspot.com",
  messagingSenderId: "394853203247",
  appId: "1:394853203247:web:8b198e1545ae91963bf5da"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
