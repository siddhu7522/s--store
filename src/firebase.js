import firebase from "firebase"


const firebaseApp=firebase.initializeApp({


    apiKey: "AIzaSyDw3ASjVO3rqgiyosv6JWBn1Y9_dXdRzxg",
    authDomain: "fir-store-26757.firebaseapp.com",
    projectId: "fir-store-26757",
    storageBucket: "fir-store-26757.appspot.com",
    messagingSenderId: "540040838535",
    appId: "1:540040838535:web:cb0c14bbc16fdf4e3be722",
    measurementId: "G-R6MSD2VYQ6"
});

const auth=firebase.auth();
export {auth};
  