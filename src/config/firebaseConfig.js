import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDZk3azmOfmEIS9rVWtiPuGEwMUTL-LQPw",
    authDomain: "finapp-29934.firebaseapp.com",
    databaseURL: "https://finapp-29934.firebaseio.com",
    projectId: "finapp-29934",
    storageBucket: "finapp-29934.appspot.com",
    messagingSenderId: "313115294998",
    appId: "1:313115294998:web:3475f82a7d8f28a0cb2437",
    measurementId: "G-3717YFXY8E"
  };

  const app = Firebase.initializeApp(firebaseConfig);
  export default db = app.database();
