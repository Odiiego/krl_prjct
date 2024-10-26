// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxkQV1PanOXnZz7668z361SwJNqfRn7Rw',
  authDomain: 'krlprjct.firebaseapp.com',
  projectId: 'krlprjct',
  storageBucket: 'krlprjct.appspot.com',
  messagingSenderId: '924584693877',
  appId: '1:924584693877:web:0de3cf4af1817b46cfa83c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
