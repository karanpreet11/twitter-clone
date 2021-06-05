import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCXRCS7NMMLrtVIcudo4s-rxFgW1Rd4rec",
    authDomain: "twitter-clone-caa5f.firebaseapp.com",
    projectId: "twitter-clone-caa5f",
    storageBucket: "twitter-clone-caa5f.appspot.com",
    messagingSenderId: "761560503182",
    appId: "1:761560503182:web:2771b47c0d4af41a980adf",
    measurementId: "G-MXXZML97JJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;