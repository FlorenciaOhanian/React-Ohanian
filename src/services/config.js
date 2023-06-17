import {
  initializeApp
} from "firebase/app";
import {
  getFirestore
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAVvHWMFB57vgIjQhw1fXze8GmIYUEdZnM",
  authDomain: "crudo-web.firebaseapp.com",
  projectId: "crudo-web",
  storageBucket: "crudo-web.appspot.com",
  messagingSenderId: "142136940946",
  appId: "1:142136940946:web:ac29e7a187340abbe0c94b"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);