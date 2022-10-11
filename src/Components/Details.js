
import React from 'react'
import ActionCard from './ActionCard'
import Cards from '../Components/Cards'

function Details(props){
        
    const {sdk,titulo,categoria,precio, descripcion} = props
return(
    <div>
        <h1>Detalle</h1>                
         <Cards sdk={sdk} titulo={titulo} precio={precio} categoria={categoria} descripcion={descripcion}/>
    </div>
    )
}

export default Details;