//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref,getDownloadURL } from "firebase/storage";




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

// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore()
const db = getFirestore(app)

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);
const gsReference = ref(storage,'gs://velasleila.appspot.com/velas2jpeg')
const listRef = ref(storage, 'gs://velasleila.appspot.com/');

export  {firestore,db, app, storageRef,gsReference,listRef}
