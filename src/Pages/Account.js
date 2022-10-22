import React from "react";
import { useState } from "react";
import { TextField,Button } from "@mui/material";
import {Link} from "react-router-dom";
import { Label } from "@mui/icons-material";


function Account (){

    const [form,setForm] = useState({ //armo estados para el formulario con los inputs que necesito
        email:" ",
        user:" "
    })
    

    const handleChange = (e) =>{ 
    const value = e.target.value // en el manejador declaro una variable value y le pido que me traiga el valor de quien modifica.
    setForm({...form, [e.target.name]:value})   //grabo por el nombre de quien modifico su valor
    
    }
        
    

    const handleSubmit = () => {
        console.log(form)
    }

       
    return (
        <>
        <h1>Cuenta</h1>
        <form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input type="email" name="email" value={form.email} onChange={handleChange}/>   
        <label>User</label>      
        <input type="text" name="user" value={form.user} onChange={handleChange}/>      
        <input type="submit"></input>
        </form>
        <Button><Link to="/Register" >Registrarse </Link></Button>
        </>
    )
}

export default Account
