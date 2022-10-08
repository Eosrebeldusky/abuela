import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";

function PrimaryButton(props){
    const {id,handleDrawerOpen, handleDrawerClose, open} = props
    const [buttonText, setButtonText] = useState(id)     // ojo pq el id existe en el boton
    function handleText(){
        setButtonText('Chupala')
    }

    return(
        <Button variant="contained" color="primary" onClick={() => open ? handleDrawerClose()  : handleDrawerOpen() }>  {buttonText} </Button>
    )
}

export default PrimaryButton;