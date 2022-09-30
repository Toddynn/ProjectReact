import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyCfjCguspVlGy7RBlahHpUi4SMOYkh9jSs",
    authDomain: "sistema-7b159.firebaseapp.com",
    projectId: "sistema-7b159",
    storageBucket: "sistema-7b159.appspot.com",
    messagingSenderId: "848155641494",
    appId: "1:848155641494:web:db1c2185ac8b6d3c43e4b7",
    measurementId: "G-DY7YVB42MJ"
};
    
if (!firebase.apps.length) { 
    firebase.initializeApp(firebaseConfig);
}

export default firebase;