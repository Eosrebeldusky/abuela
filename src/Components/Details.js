
import React from 'react'
import ActionCard from './ActionCard'


function Details(props){
        
    const {sdk,titulo,categoria,precio, descripcion,handleDrawerClose, drawerWidth } = props
    
return(
    <div>
        <h1>Detalle</h1>
        <ActionCard sdk={sdk} titulo={titulo} precio={precio} 
        categoria={categoria} descripcion={descripcion} open={'open'} handleDrawerClose={handleDrawerClose} drawerWidth={drawerWidth}/>
        
    </div>
    )
}

export default Details;