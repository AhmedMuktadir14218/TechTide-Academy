// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env,
  authDomain:import.meta.env,
  projectId:import.meta.env,
  storageBucket:import.meta.env,
  messagingSenderId:import.meta.env,
  appId:import.meta.env"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;