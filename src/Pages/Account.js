import React from "react";
import { TextField } from "@mui/material";
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
        </form>
        </>
    )
}

export default Account
