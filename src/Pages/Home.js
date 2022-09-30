import Cards from "../Components/Cards";
import Menu from "../Components/Menu";
import { Box } from "@mui/system";
import React from "react";
function Home(){

    
    const productosL = [{id:1, Titulo:'Vela Floreada', categoria:'Vela', precio:'300'},
                    {id:2,Titulo:'Vela de Bano',categoria:'Vela', precio:'200'},
                    {id:3,Titulo:'Vela Aromatica',categoria:'Vela', precio:'3100'}];

    const misProductos = productosL.map((productos) => <Cards key={productos.id} titulo={productos.Titulo} categoria ={productos.categoria} precio={productos.precio} />);

    


    return(
            <div>                
                <h1>Leichulis</h1>
                <main>
                {misProductos}                                      
                </main>
            </div>    
        )
}

export default Home;