
import React from 'react'
import ActionCard from './ActionCard'


function Details(props){
    console.log('Golosa, aca estas viendo el detalle')    
    
return(
    <div>
        <h1>Detalle</h1>
        <h3>{props.params}</h3>
         <ActionCard/>
    </div>
    )
}

export default Details;