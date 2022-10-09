importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");


firebase.initializeApp({
    apiKey: "AIzaSyAjK0jh0BTum2C7ZEI-u4jPgLx5HGBtsPY",
    authDomain: "limerick-it.firebaseapp.com",
    projectId: "limerick-it",
    storageBucket: "limerick-it.appspot.com",
    messagingSenderId: "241703776662",
    appId: "1:241703776662:web:a80380785653f633abadb7",
    measurementId: "G-METEMY19JN"
});


const messaging = firebase.messaging();