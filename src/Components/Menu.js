import "../Styles/menuStyles.css";
import React from "react";
import {Link} from "react-router-dom"
function Menu(){


    return(
        <div>
            <nav>
                <ul className='topnav'>
                    <li><Link to="/" >Home </Link></li>                   
                    <li><Link to="/shop" >Contacto</Link> </li>
                    <li><Link to="/account" >Mi Cuenta</Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;