
import React from 'react'


function Details(props){
    
    console.log('Golosa, aca estas viendo el detalle')
    console.log('props',props.id)
    const {id} =props


return(
    <div>
        <h1>Detalle</h1>
        <h3>{id}</h3>
             
    </div>
    )
}

export default Details;