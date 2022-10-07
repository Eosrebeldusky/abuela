import React from "react";
import { Button } from "@mui/material";


function PrimaryButton(props){
    const {id,handleDrawerOpen} = props
    

    return(
        <Button variant="contained" color="primary" onClick={handleDrawerOpen}>Detalles </Button>
    )
}

export default PrimaryButton;