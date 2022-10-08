
import React from 'react'
import ActionCard from './ActionCard'


function Details(props){
    
    console.log('Golosa, aca estas viendo el detalle')
    console.log('props',props.id)
    const {id} = props


return(
    <div>
        <h1>Detalle</h1>
        <h3>pee</h3>
            <ActionCard/>
    </div>
    )
}

export default Details;