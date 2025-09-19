import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBSCr0oQhG36IVQ4KO-_hYV9PLNrK1rIYM",
  authDomain: "portfolio-app-5101c.firebaseapp.com",
  projectId: "portfolio-app-5101c",
  storageBucket: "portfolio-app-5101c.firebasestorage.app",
  messagingSenderId: "704273139529",
  appId: "1:704273139529:web:818fad2cadd9e2b2887c98",
  measurementId: "G-VMWS82Z2BE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;
