import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";

function ReturnButton(props){
    const {handleDrawerClose } = props
    const [buttonText, setButtonText] = useState('Cerrar')   // ojo pq el id existe en el boton
        
   
    return(        
        <Button variant="outlined" color="primary" onClick={handleDrawerClose}>  {buttonText} </Button>            
    )
}

export default ReturnButton;