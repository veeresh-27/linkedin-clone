import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyASTobzIhReUBhCYStFH1K2wU-rZK2ARGo",
    authDomain: "linkedin-clone-6ce1f.firebaseapp.com",
    projectId: "linkedin-clone-6ce1f",
    storageBucket: "linkedin-clone-6ce1f.appspot.com",
    messagingSenderId: "565326818623",
    appId: "1:565326818623:web:4d5d3c3531b45c821bb78a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db, auth};