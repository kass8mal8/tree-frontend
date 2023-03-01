import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


   // Your web app's Firebase configuration
   const firebaseConfig = {
      apiKey: "AIzaSyAjAbnybW10jk01gk8c6uHzRJN7BLjYsgE",
      authDomain: "tree-planting-f52e7.firebaseapp.com",
      projectId: "tree-planting-f52e7",
      storageBucket: "tree-planting-f52e7.appspot.com",
      messagingSenderId: "1069248369659",
      appId: "1:1069248369659:web:2505aa612ad0aa7d31f15e"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  