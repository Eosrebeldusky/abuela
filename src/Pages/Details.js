
import React from 'react'
import Cards from '../Components/Cards'

function Details(props){
    
    console.log('Golosa, aca estas viendo el detalle')
    console.log('props',props.id)


return(
    <div>
        <h1>Detalle</h1>
        <Cards />
        
    </div>
    )
}

export default Details;