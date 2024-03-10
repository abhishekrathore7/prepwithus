import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyCxSWUl9smk_RrQCO_ZY8UUZxOxXreQhJg",
    authDomain: "prepwithus-9d13b.firebaseapp.com",
    projectId: "prepwithus-9d13b",
    storageBucket: "prepwithus-9d13b.appspot.com",
    messagingSenderId: "1032595632903",
    appId: "1:1032595632903:web:fc66955cec68d480148ba2"
};

initializeApp(firebaseConfig);
export const auth = getAuth();