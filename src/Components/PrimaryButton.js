import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";

function PrimaryButton(props){
    const {key,handleDrawerOpen, handleDrawerClose, open} = props
    const [buttonText, setButtonText] = useState('Detalles')   // ojo pq el id existe en el boton
    
    return(
        <Button variant="contained" color="primary" onClick={() => open ? handleDrawerClose()  : handleDrawerOpen(key) }>  {buttonText} </Button>
    )
}

export default PrimaryButton;