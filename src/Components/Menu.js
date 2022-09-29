import "../Styles/menuStyles.css";
import React from "react";
import {Link} from "react-router-dom"
function Menu(){


    return(
        <div>
            <nav>
                <ul className='topnav'>
                    <li><Link to="/" >Home </Link></li>
                    <li><Link to="/homedeco" >Home Deco</Link></li>
                    <li><Link to="/bathnbody" >Bath and body</Link></li>
                    <li><Link to="/present" >Sets de regalo</Link> </li>
                    <li><Link to="/shop" >Hacenos tu Pedido!</Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;