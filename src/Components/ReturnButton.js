import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";

function ReturnButton(props){
    const {sdk, titulo, precio, categoria, handleDrawerClose,open, descripcion} = props
    const [buttonText, setButtonText] = useState('Cerrar')   // ojo pq el id existe en el boton
        
   
    return(        
        <Button variant="contained" color="primary" onClick={handleDrawerClose}>  {buttonText} </Button>            
    )
}

export default ReturnButton;