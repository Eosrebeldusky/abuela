import React from "react";
import { useState } from "react";
import { TextField,Button } from "@mui/material";
import {Link} from "react-router-dom";
import { Label } from "@mui/icons-material";

function Account (){

    const [formValue,setFormValue] = useState({
        email:""
    })


    const handleChange = (e) =>{
        const {name,value} = e.target.value;
        setFormValue((prevState) => {
            return {...prevState,[name]:value};
        }); 
      }

    const handleSubmit = () =>{
        console.log(email)
    }

    const email = formValue;
    
    return (
        <>
        <h1>Cuenta</h1>
        <form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input type="email" name="email" value={email} onChange={handleChange}/>         
        <input type="submit"></input>
        </form>
        <Button><Link to="/Register" >Registrarse </Link></Button>
        </>
    )
}

export default Account
