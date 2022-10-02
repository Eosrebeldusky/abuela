import Cards from "../Components/Cards";
import React from "react";
function Home(){

    
    const productosL = [{id:1, Titulo:'Vela Floreada', categoria:'Vela', precio:'300'},
                    {id:2,Titulo:'Vela de Bano',categoria:'Vela', precio:'200'},
                    {id:3,Titulo:'Vela Aromatica',categoria:'Vela', precio:'3100'},
                    {id:4,Titulo:'Tu bieja',categoria:'carajo dijo la princesa', precio:'Mucho'},
                ];

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