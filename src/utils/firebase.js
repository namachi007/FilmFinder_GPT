// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs6wPERzIoHFFni2eXn2FWDHY8373zTxU",
  authDomain: "netflixgpt-5466c.firebaseapp.com",
  projectId: "netflixgpt-5466c",
  storageBucket: "netflixgpt-5466c.firebasestorage.app",
  messagingSenderId: "376967154936",
  appId: "1:376967154936:web:29d01a20cb625a744b3f0d",
  measurementId: "G-MFPEKGBBJM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
