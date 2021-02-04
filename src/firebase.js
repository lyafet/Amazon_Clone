// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAwV7bqkPTaFZ2s0ZHmfTip5dP1qL4U21Q",
    authDomain: "clone-a823b.firebaseapp.com",
    projectId: "clone-a823b",
    storageBucket: "clone-a823b.appspot.com",
    messagingSenderId: "44476645236",
    appId: "1:44476645236:web:f27db1a0889802bb9d3621",
    measurementId: "G-S844F3K0VC"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db, auth };
