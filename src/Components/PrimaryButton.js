import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";

function PrimaryButton(props){
    const {sdk, titulo, precio, categoria,  handleDrawerOpen, handleDrawerClose,open, descripcion} = props
    const [buttonText, setButtonText] = useState('Abrir Detalle')   // ojo pq el id existe en el boton
        
   
    return(        
        <Button variant="contained" color="primary"onClick={()=> handleDrawerOpen(sdk,titulo,precio,categoria,descripcion)}>  {buttonText} </Button>            
    )
}

export default PrimaryButton;