// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env  apiKey: "AIzaSyDQj0l4Ot7ViOmPyqIUZJZxNjt6fEMIagM",,
  authDomain:import.meta.env  authDomain: "techtide-academy.firebaseapp.com",,
  projectId:import.meta.env  projectId: "techtide-academy",,
  storageBucket:import.meta.env  storageBucket: "techtide-academy.appspot.com",,
  messagingSenderId:import.meta.env  messagingSenderId: "714044482949",,
  appId:import.meta.env  appId: "1:714044482949:web:f06726a04e5b6492d710ec""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;