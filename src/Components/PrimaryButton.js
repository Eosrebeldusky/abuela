import React from "react";
import { Button } from "@mui/material";


function PrimaryButton(props){
    const {sdk, titulo, precio, categoria,  handleDrawerOpen, descripcion,img} = props
    const buttonText ='Abrir Detalle'   // ojo pq el id existe en el boton
        
   
    return(        
        <Button variant="contained" color="primary"onClick={()=> handleDrawerOpen(sdk,titulo,precio,categoria,descripcion,img)}>  {buttonText} </Button>            
    )
}

export default PrimaryButton;