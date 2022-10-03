import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


const firebaseApp = fb.initializeApp({
    apiKey: "AIzaSyC60M2jheahZIzHwZlNSrS3QHDaFrNrwCU",
    authDomain: "lydia-instagram-clone.firebaseapp.com",
    projectId: "lydia-instagram-clone",
    storageBucket: "lydia-instagram-clone.appspot.com",
    messagingSenderId: "622883284112",
    appId: "1:622883284112:web:f1813d07b206939622a415",
    measurementId: "G-G7T379R1R1",
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };