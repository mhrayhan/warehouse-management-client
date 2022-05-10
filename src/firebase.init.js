// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoH0oT-4--cy3JW2m4IEQDKE_Cp9Hi2hM",
  authDomain: "inventory-management-9f796.firebaseapp.com",
  projectId: "inventory-management-9f796",
  storageBucket: "inventory-management-9f796.appspot.com",
  messagingSenderId: "578464960505",
  appId: "1:578464960505:web:648aad2dd63c06af26b728",
  measurementId: "G-E5N2KT988K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;