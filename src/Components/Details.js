
import React from 'react'
import ActionCard from './ActionCard'


function Details(props){
    console.log()    
    const productosL = [{id:1, Titulo:'Vela Floreada', categoria:'Vela', precio:'300'},
                        {id:2,Titulo:'Vela de Bano',categoria:'Vela', precio:'200'},
                        {id:3,Titulo:'Vela Aromatica',categoria:'Vela', precio:'3100'},
                        {id:4,Titulo:'Tu bieja',categoria:'carajo dijo la princesa', precio:'Mucho'},
                ];

return(
    <div>
        <h1>Detalle</h1>
        <h3>{props.params}</h3>
         <ActionCard/>
    </div>
    )
}

export default Details;