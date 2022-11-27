import React, {useState} from "react";
import { Button, TextField, Box, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
function AddItem(props){

    
    const [values,setValues] = useState({
        titulo:'',
        descripcion:'',
        precio:'',
        categoria:'',
    })

    const handleSubmit = e => {
        e.preventDefault();      
        props.addOrEdit(values);
    }  

    const handleChange = e =>{ 
        const {name,value} = e.target;        
        setValues({...values,[name]:value})
        
    }
     
    return( 
        <>
            <h1>Agregar item</h1>
                <form id= 'AddCandle' onSubmit={handleSubmit}>                    
                    <TextField label='Titulo' type="text" name="titulo" onChange={handleChange}/>              
                    <TextField label='Descripcion' type="text" name="descripcion" onChange={handleChange}/>                
                    <TextField label='Precio' type="text" name="precio" onChange={handleChange}/>
               
        <InputLabel id="select-categoria">Categoría</InputLabel>
        <Select
          labelId="select-categoria"
          id="select-categoria"          
          label="Categoría"
          name="categoria"          
          onChange={handleChange}
        >
          <MenuItem value={'Vela Floreada'}>Vela FLoreada</MenuItem>
          <MenuItem value={'Vela Aromatica'}>Vela Aromatica</MenuItem>
          <MenuItem value={'Vela Tradicional'}>Vela Tradicional</MenuItem>
        </Select>
       
     
                    <TextField label='Categoría' type="text" name="categoria" onChange={handleChange}/>                    
                    <Button type="submit" variant="contained">Cargar Vela</Button>
                </form>
        </>
    )
}

export default AddItem;