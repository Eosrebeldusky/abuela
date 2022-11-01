import React from "react";


function Crud(){

    return(
        <>
        <p>'Aca vamos a cargar un formulario para cargar cositas'</p>
            <form>
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

export default Crud;