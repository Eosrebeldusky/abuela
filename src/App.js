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



function App() {




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
