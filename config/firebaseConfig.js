// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth,getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyBK7DFjxN5SQl0RSFpQMTbBC1zGpFbJh2A",
  authDomain: "app-lwf.firebaseapp.com",
  projectId: "app-lwf",
  storageBucket: "app-lwf.firebasestorage.app",
  messagingSenderId: "393703152328",
  appId: "1:393703152328:web:e4e3336cc7670392b863fd",
  measurementId: "G-4N9980X9NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage) // or "session" for session-based persistence
});
const analytics = getAnalytics(app);