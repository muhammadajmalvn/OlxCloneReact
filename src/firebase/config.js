import firebase from "firebase";
import 'firebase/auth' ;
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcYoP-XI_mMnkBiiE59-z7gWOuwiHz1Uc",
    authDomain: "olxclone-e3380.firebaseapp.com",
    projectId: "olxclone-e3380",
    storageBucket: "olxclone-e3380.appspot.com",
    messagingSenderId: "865471161894",
    appId: "1:865471161894:web:59484452c7c8a1902968e7",
    measurementId: "G-086ZLN0LSH"
  };

 export default firebase.initializeApp(firebaseConfig)