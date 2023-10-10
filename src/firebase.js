import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAxeH_P1mH0tnGX1kpUzpVaQAoXT3RXBOM",
    authDomain: "jchat-77908.firebaseapp.com",
    projectId: "jchat-77908",
    storageBucket: "jchat-77908.appspot.com",
    messagingSenderId: "118433435255",
    appId: "1:118433435255:web:a906a5c2c3d1d30c06c072"
  }).auth();