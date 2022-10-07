import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function PrimaryButton(props){
    const id = props.id
    

    return(
        <Button variant="contained" color="primary"> <Link to={"/details/" + id} >Detalles </Link> </Button>
    )

}

export default PrimaryButton;