import './App.css';
import PersistentDrawerRight from './Pages/HomeCopy'
//import Cart from './Pages/Cart';

import React from "react";
import Shop from './Pages/Shop';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Menu from './Components/Menu';
import Details from './Components/Details';
import Account from './Pages/Account';
import Register from './Pages/Register';
import { initializeApp } from "firebase/app";



function App() {


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

console.log('esta',app)


  return (
    <div>        
        <BrowserRouter>
        <Menu/>
         <Routes>         
          <Route path="/" element= {<PersistentDrawerRight/>} exact/>          
          <Route path="/shop" element= {<Shop/>} exact/>
          <Route path="/account" element= {<Account/>} exact/>
          <Route path="/Register" element= {<Register/>} exact/>
          <Route path="/details/:id" element= {<Details/>} exact/>
          </Routes>
        </BrowserRouter>          
    </div>    
  );
}

export default App;
