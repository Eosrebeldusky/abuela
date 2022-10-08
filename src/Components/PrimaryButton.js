import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";

function PrimaryButton(props){
    const [buttonText, setButtonText] = useState('DetaTuvielles')
    const {id,handleDrawerOpen, handleDrawerClose, open} = props
    function handleText(){
        setButtonText('Chupala')
    }

    return(
        <Button variant="contained" color="primary" onClick={() => open ? handleDrawerClose()  : handleDrawerOpen() }>  {buttonText} </Button>
    )
}

export default PrimaryButton;