// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "smart-streetlight-project.firebaseapp.com",
  databaseURL: "https://smart-streetlight-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-streetlight-project",
  storageBucket: "smart-streetlight-project.appspot.com",
  messagingSenderId: "428326202896",
  appId: "1:428326202896:web:3352ae3a789e2f1fada495",
  measurementId: "G-FM5W7BPE3D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
