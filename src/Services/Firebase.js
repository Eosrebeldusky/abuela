//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore,getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAydE2Xok68zlBVvPEqBK379BBNcjzcEhM",
  authDomain: "velasleila.firebaseapp.com",
  projectId: "velasleila",
  storageBucket: "velasleila.appspot.com",
  messagingSenderId: "810170723725",
  appId: "1:810170723725:web:f17af75354a46e8ddb21c4",
  measurementId: "G-SFZC4CMZSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore()
const db = getFirestore(app)

