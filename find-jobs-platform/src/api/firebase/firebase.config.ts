import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBgtSw2vE9DVfTK9YRQlCDKAjI_1znR5NM",
  authDomain: "find-jobs-ab29a.firebaseapp.com",
  projectId: "find-jobs-ab29a",
  storageBucket: "find-jobs-ab29a.appspot.com",
  messagingSenderId: "991507986057",
  appId: "1:991507986057:web:00a8a27c724fdc83717858"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app)
