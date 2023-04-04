// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDDI7qKFSyEeg23CJNFvilZIOKL2lw88uU",
  authDomain: "tiktokjornada-11d2d.firebaseapp.com",
  projectId: "tiktokjornada-11d2d",
  storageBucket: "tiktokjornada-11d2d.appspot.com",
  messagingSenderId: "946280043441",
  appId: "1:946280043441:web:3702ae92a190a9d29c6390",
  measurementId: "G-DL314WV5JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export default db;