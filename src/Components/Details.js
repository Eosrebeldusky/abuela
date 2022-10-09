
import React from 'react'
import ActionCard from './ActionCard'
import {Route, Link, Routes, useParams} from 'react-router-dom';

function Details(props){
    const params = useParams()
    console.log('Golosa, aca estas viendo el detalle')    
    console.log(params)

return(
    <div>
        <h1>Detalle</h1>
        <h3>{props.params}</h3>
           {/* <ActionCard/>*/}
    </div>
    )
}

export default Details;