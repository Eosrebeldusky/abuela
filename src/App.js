import './App.css';
import Home from './Pages/Home';
import PersistentDrawerRight from './Pages/HomeCopy'
//import Cart from './Pages/Cart';
import BathBody from './Pages/BathBody';
import HomeDeco from './Pages/HomeDeco';
import React from "react";
import Shop from './Pages/Shop';
import {BrowserRouter,Routes,Route,Switch} from "react-router-dom";
import Presents from './Pages/Presents';
import Menu from './Components/Menu';
import Details from './Pages/Details';

function App() {

  return (

    <div>        
        <BrowserRouter>
        <Menu/>         


         <Routes>         
          <Route path="/" element= {<PersistentDrawerRight/>} exact/>          
          <Route path="/homedeco" element= {<HomeDeco/>} exact/>          
          <Route path="/bathnbody" element= {<BathBody/>} exact/>
          <Route path="/present" element= {<Presents/>} exact/>          
          <Route path="/shop" element= {<Shop/>} exact/>
          <Route path="/details/:id" element= {<Details/>} exact/>
          </Routes>
        </BrowserRouter>
          
    </div>
  );
}

export default App;
