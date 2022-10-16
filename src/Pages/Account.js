import React from "react";
import { TextField,Button } from "@mui/material";
import {Link} from "react-router-dom";

function Account (){

    const handleSubmit = () =>{
        alert('Enviado')
    }
    return (
        <>
        <h1>Account</h1>
        <form onSubmit={handleSubmit}>
        <TextField id="filled-basic" label="email" variant="filled" />
        <TextField id="filled-basic" label="password" variant="filled" />
        <input type="submit"></input>
        </form>
        <Button><Link to="/Register" >Registrarse </Link></Button>
        </>
    )
}

export default Account
