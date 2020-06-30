
import firebase from 'firebase'
import '@firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD8nQb3rYxjWrSOa5PediIzTZ0h01IH_Xk",
    authDomain: "instaclone-3ed4e.firebaseapp.com",
    databaseURL: "https://instaclone-3ed4e.firebaseio.com",
    projectId: "instaclone-3ed4e",
    storageBucket: "instaclone-3ed4e.appspot.com",
    messagingSenderId: "421523960817",
    appId: "1:421523960817:web:85dd639ec6e3ae0eda0a50",
    measurementId: "G-KY57NYMVNF"
});

firebase.analytics();
export const reduxSagaFirebase = new ReduxSagaFirebase(firebaseConfig)

