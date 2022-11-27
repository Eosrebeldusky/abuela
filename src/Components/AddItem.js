import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";

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
                <label>
                    Titulo:
                    <input type="text" name="titulo" onChange={handleChange}/>
                </label>
                <label>
                    Descripcion:
                    <input type="text" name="descripcion" onChange={handleChange}/>
                </label>
                <label>
                    Precio:
                    <input type="text" name="precio" onChange={handleChange}/>
                </label>
                <label>
                    Categoria:
                    <input type="text" name="categoria" onChange={handleChange}/>
                </label>                
                <input type="submit" value="Submit"/>
            </form>    
        </>
        )
}

export default AddItem;