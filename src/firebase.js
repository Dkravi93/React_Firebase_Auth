import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaWYBW17BrxDQDxz0W3zB9QIOpszisZYg",
  authDomain: "recipedb-18191.firebaseapp.com",
  projectId: "recipedb-18191",
  storageBucket: "recipedb-18191.appspot.com",
  messagingSenderId: "652698398515",
  appId: "1:652698398515:web:1ba800a1ce6e07735f9846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
