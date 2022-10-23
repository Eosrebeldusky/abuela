import React, { useState } from "react";
import { Box, TextField,Button} from "@mui/material";

function Register (){
    const [email,setEmail] = useState('')

    const handleSubmit = (e)=> {
        alert('EnviadoSubm')
        e.preventDefault()
    }

    function handleChange(){
        
    }

    const handleRegister = () =>{
        alert('Enviado')
    }

    return (
        <>
        <h1>Account</h1>

        <Box component='Form' onSubmit={handleSubmit} sx={{
        '& .MuiTextField-root': { m:2, width: '25ch' },
      }}>        
        <TextField id="filled-basic" label="email" variant="filled" />
        <TextField id="filled-basic" label="userName" variant="filled" />
        <TextField id="filled-basic" label="country" variant="filled" />
        <TextField id="filled-basic" label="password" variant="filled" />
        <input type="submit"></input>
        
        <Button onClick={handleRegister}>Registrarse</Button>
        </Box>
        </>
    )
}

export default Register
