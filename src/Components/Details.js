
import React from 'react'
import ActionCard from './ActionCard'
import Cards from '../Components/Cards'

function Details(props){
        
    const {sdk,titulo,categoria,precio, descripcion,open, handleDrawerClose, drawerWidth } = props
    
return(
    <div>
        <h1>Detalle</h1>
        <ActionCard sdk={sdk} titulo={titulo} precio={precio} 
        categoria={categoria} descripcion={descripcion} open={open} handleDrawerClose={handleDrawerClose} drawerWidth={drawerWidth}/>
        
    </div>
    )
}

export default Details;