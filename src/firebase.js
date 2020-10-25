// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAydkTgXgHfe5SkvUHTCIFiIEb5VpHDDsE",
    authDomain: "whatsapp-clone-ac09a.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-ac09a.firebaseio.com",
    projectId: "whatsapp-clone-ac09a",
    storageBucket: "whatsapp-clone-ac09a.appspot.com",
    messagingSenderId: "134173262341",
    appId: "1:134173262341:web:6808672d64df5449b1526c",
    measurementId: "G-J4Z6BBR4XZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;