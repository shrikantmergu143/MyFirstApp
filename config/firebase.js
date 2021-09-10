// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA455IScPVXoVAjMP8Kjpogbc2rVM_u0WA",
  authDomain: "instashre-2c6a1.firebaseapp.com",
  databaseURL: "https://instashre-2c6a1-default-rtdb.firebaseio.com",
  projectId: "instashre-2c6a1",
  storageBucket: "instashre-2c6a1.appspot.com",
  messagingSenderId: "758145740018",
  appId: "1:758145740018:web:cfebe0d0d2b43bef61346b"
};
  
  // Initialize Firebase
const app =!firebase.apps.length
    ?firebase.initializeApp(firebaseConfig)
    :firebase.app();
const db=app.firestore();
const auth=app.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {db,auth,provider};
