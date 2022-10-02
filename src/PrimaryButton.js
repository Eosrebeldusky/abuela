import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function PrimaryButton(){


    return(
        <Button variant="contained" color="primary"> <Link to="/details" >Detalles </Link> </Button>
    )

}

export default PrimaryButton;