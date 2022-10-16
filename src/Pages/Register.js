import React from "react";
import { TextField,Button } from "@mui/material";
import Link from 'react-router-dom'
function Register (){

    const handleSubmit = () =>{
        alert('Enviado')
    }

    const handleRegister = () =>{
        alert('Enviado')
    }

    return (
        <>
        <h1>Account</h1>
        <form onSubmit={handleSubmit}>
        <TextField id="filled-basic" label="email" variant="filled" />
        <TextField id="filled-basic" label="userName" variant="filled" />
        <TextField id="filled-basic" label="country" variant="filled" />
        <TextField id="filled-basic" label="password" variant="filled" />
        <input type="submit"></input>
        </form>
        <Button onClick={handleRegister}>Registrarse</Button>
        </>
    )
}

export default Register
