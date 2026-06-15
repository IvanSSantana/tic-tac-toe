import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCGYSzMTIIe5NgLv-2IjeanBwq89CK5Sgg",
  authDomain: "tic-tac-toe-ce3a6.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-ce3a6-default-rtdb.firebaseio.com",
  projectId: "tic-tac-toe-ce3a6",
  storageBucket: "tic-tac-toe-ce3a6.firebasestorage.app",
  messagingSenderId: "1040005712217",
  appId: "1:1040005712217:web:3ba17d0c11c4976796a448"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
