import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBnD8ufZoqAXWmf-SLkHX7LVpmyV6kTq28",
  authDomain: "netflix-gpt-1c2ff.firebaseapp.com",
  projectId: "netflix-gpt-1c2ff",
  storageBucket: "netflix-gpt-1c2ff.appspot.com",
  messagingSenderId: "350931441765",
  appId: "1:350931441765:web:c1f70d6792694b99fc0e8c",
  measurementId: "G-DWH57WJRXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()