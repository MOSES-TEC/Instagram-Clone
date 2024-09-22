import Firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
import "firebase/compat/auth";


const config = {
    apiKey: "AIzaSyC071aQQctM-t6B1S84xtNDyzwzGmA_5HI",
    authDomain: "instagram-69f7a.firebaseapp.com",
    projectId: "instagram-69f7a",
    storageBucket: "instagram-69f7a.appspot.com",
    messagingSenderId: "801958338987",
    appId: "1:801958338987:web:a8bae9e806c7c85ffc72ee"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


export { firebase, FieldValue };

