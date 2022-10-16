import React from "react";
import { TextField,Button } from "@mui/material";
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
        <Button>Registrarse</Button>
        </>
    )
}

export default Account
