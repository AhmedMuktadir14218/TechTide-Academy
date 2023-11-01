// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta,
  authDomain:import.meta,
  projectId:import.meta,
  storageBucket:import.meta,
  messagingSenderId:import.meta,
  appId:import.meta"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;