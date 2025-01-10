import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXxxYVxRZO9qlzMepltrGr-s46ir5ef7M",
  authDomain: "rinkleready.firebaseapp.com",
  projectId: "rinkleready",
  storageBucket: "rinkleready.firebasestorage.app",
  messagingSenderId: "624112979523",
  appId: "1:624112979523:web:3565df6cb4ab939ea54ef6",
  measurementId: "G-3Q4G8HWMG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
