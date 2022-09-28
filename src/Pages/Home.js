import Cards from "../Components/Cards";
import Menu from "../Components/Menu";

function Home(){

    const categorias = ['Velas','Banos','Aromas']
    const productos = [{Titulo1:'Vela1'},{Titulo2:'vela2'}];
    const listCategorias = categorias.map((categoria) => <Cards titulo={categoria}/>);

    return(
            <div>
                <Menu/>
                <h1>Leichulis</h1>                
                {listCategorias}
            </div>    
        )
}

export default Home;