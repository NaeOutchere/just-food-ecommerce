import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA6-T-E8oB7LCEx79nfy2el8iBV8BrE8ds",
    authDomain: "just-food-876.firebaseapp.com",
    databaseURL: "https://just-food-876-default-rtdb.firebaseio.com",
    projectId: "just-food-876",
    storageBucket: "just-food-876.appspot.com",
    messagingSenderId: "308152390089",
    appId: "1:308152390089:web:a9ed6ed0194a14a0b21818",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};