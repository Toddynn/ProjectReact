import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCI6FTNIJpUIPCeX89WouSyw-BowmIbuWU",
    authDomain: "curso-6403b.firebaseapp.com",    
    projectId: "curso-6403b",   
    storageBucket: "curso-6403b.appspot.com",  
    messagingSenderId: "957981889739",   
    appId: "1:957981889739:web:d96c08d4316acc4e40774e",  
    measurementId: "G-JE6KYR3KF8" 
}; 
    
if (!firebase.app.length) { 
    firebase.initializeApp(firebaseConfig);
}
