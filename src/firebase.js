import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCMHcR9tOxnJUlBd1bP1pRVhakfnPuXhPo",
    authDomain: "react-todo-firebase-app.firebaseapp.com",
    databaseURL: "https://react-todo-firebase-app.firebaseio.com",
    projectId: "react-todo-firebase-app",
    storageBucket: "react-todo-firebase-app.appspot.com",
    messagingSenderId: "423719282751",
    appId: "1:423719282751:web:c5ea659578c5de063db08a"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
