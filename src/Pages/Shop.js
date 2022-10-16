import React from "react";
import { TextField, Button } from "@mui/material";

function Shop(){

    const handleSubmit = () =>{
        alert('tuvieja por ahora')
    }
return(
        <div> 
            <h1>Contacto</h1>
            <h2>Mandamos un WhatsApp y responderemos tus dudas</h2>
            <form onSubmit={handleSubmit}>
            <TextField id="filled-basic" label="Nombre" variant="filled" />
            <TextField id="filled-basic" label="Telefono" variant="filled" />
            <TextField id="filled-basic" label="Observaciones" variant="filled" />
            <Button onClick={handleSubmit}> Enviar Consulta</Button>
            <input type="submit"></input>
            </form>
            
        </div>
)
}

export default Shop;