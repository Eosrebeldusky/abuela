import Cards from "../Components/Cards";
import Menu from "../Components/Menu";
import { Box } from "@mui/system";
import React from "react";
function Home(){

    
    const productosL = [{id:1, Titulo:'Vela Floreada', categoria:'Vela'},
                    {id:2,Titulo:'Vela de Bano',categoria:'Vela'},
                    {id:3,Titulo:'Vela Aromatica',categoria:'Vela'}];

    const misProductos = productosL.map((productos) => <Cards key={productos.id} titulo={productos.Titulo} categoria ={productos.categoria} />);

    


    return(
            <div>
                <Menu/>
                <h1>Leichulis</h1>
                <Box    display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="30vh">
                {misProductos}                
                </Box>                      
            </div>    
        )
}

export default Home;