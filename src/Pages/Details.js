import { Card } from '@mui/material';
import React from 'react'
import Cards from '../Components/Cards'

function Details(props){
    
    console.log('Golosa, aca estas viendo el detalle')
    const titulo = props.titulo

return(
    <div>
        <h1>acadetalles</h1>
        <Cards titulo={titulo} />        
    </div>
    )
}

export default Details;