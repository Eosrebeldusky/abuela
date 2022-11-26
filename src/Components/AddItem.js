import React, {useState} from "react";


function AddItem(){

    
    const [values,setValues] = useState({
        titulo:'',
        descripcion:'',
        precio:'',
        categoria:'',
    })

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values)
    }  

    const handleChange = e =>{
         
    }
    
    return( 
        <>
        <h1>Agregar item</h1>
            <form id= 'AddCandle' onSubmit={handleSubmit}>
                <label>
                    Titulo:
                    <input type="text" name="titulo"/>
                </label>
                <label>
                    Descripcion:
                    <input type="text" name="descripcion"/>
                </label>
                <label>
                    Precio:
                    <input type="text" name="precio"/>
                </label>
                <label>
                    Categoria:
                    <input type="text" name="categoria"/>
                </label>                
                <input type="submit" value="Submit"/>
            </form>    
        </>
        )
}

export default AddItem;