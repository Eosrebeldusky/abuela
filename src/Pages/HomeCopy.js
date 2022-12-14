import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Cards from '../Components/Cards'
import Details from '../Components/Details';
import Menu from '../Components/Menu'
import car from '../img/car.png';
import { Button } from '@mui/material';
import { useEffect,useState } from 'react';
import {db,storage,} from '../Services/Config'
import { collection,getDocs} from "firebase/firestore";
import {storageRef,gsReference,listRef} from '../Services/Config'
import { getDownloadURL,getStorage, ref,listAll } from 'firebase/storage';

//Largo del Drawer
const drawerWidth = 450;

//hardcodeo esta hueva
const productosL = [{sdk:1, id:1, Titulo:'Vela Floreada', categoria:'Vela', precio:'300', descripcion:'Una vela re copada1', img:{car}},
                    {sdk:2, id:2,Titulo:'Vela de Bano',categoria:'Vela', precio:'200', descripcion:'Una vela re copada2'},
                    {sdk:3,id:3,Titulo:'Vela Aromatica',categoria:'Vela', precio:'3100', descripcion:'Una vela re copada3'},
                    {sdk:4, id:4,Titulo:'Tu bieja',categoria:'carajo dijo la princesa', precio:'Mucho', descripcion:'Una vela re copada4'},
                ];





const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));



//a partir de aca esta la funcion que hace todo
export default function PersistentDrawerRight() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false); //cargo estados de abierto cerrado
  const [details, setDetails] = React.useState('');  
  const [vela, setVela] = useState([])
  const [img,setImg]  = useState("")
  

  const renderBitch = (sdk, titulo, precio, categoria, descripcion, img) =>{    
    setDetails(<Details sdk={sdk} img={img} titulo={titulo} precio={precio} categoria={categoria} descripcion={productosL.descripcion} open={open} drawerWidth={drawerWidth}/>)
  }

  const handleDrawerOpen = (sdk,titulo, precio, categoria, descripcion,img) => { //funcion abrir  
    setOpen(true);    
    renderBitch(sdk,titulo,precio,categoria, descripcion,img);         
  };

  const handleDrawerClose = () => { // funcion cerrar
    setOpen(false);
  };


  async function velasRancias(){
    const velasCollectionRef = collection(db,"velas")
    await getDocs(velasCollectionRef)
    .then(res=>{
        const velaL = res.docs.map(doc=>({data:doc.data(),id:doc.id}))
        console.log('vela',velaL)
        setVela(velaL)        
    })  
  }
  
  useEffect(() =>{
    velasRancias()
  },[])
  
  


  const velas = vela.map(productos => <Cards justify = 'center' key={productos.id}  url={productos.data.url}   img={img} sdk={productos.data.sdk} titulo={productos.data.titulo} categoria={productos.data.categoria} precio={productos.data.precio} 
  handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} open={'open'} />) // aca itero productos  para poder verlos, esto se va a ir el dia que tenga un backend y le paso las funciones de abrir cerrar y el estado.
  
  

  
  
      
  const storage = getStorage();
    getDownloadURL(ref(storage,gsReference))
    .then((url)=>{
      setImg(url)
  })

 /*
  listAll(listRef)
  .then((res) => { 
    res.items.forEach((itemRef) => {
      console.log('item',itemRef)
    });
  }).catch((error) => {
    console.log('error 132',error)
    // Uh-oh, an error occurred!
  });



   
  const misProductos = productosL.map((productos) => // aca itero productos  para poder verlos, esto se va a ir el dia que tenga un backend y le paso las funciones de abrir cerrar y el estado.
  <Cards justify = 'center' sdk={productos.sdk} key={productos.key} titulo={productos.Titulo} categoria = {productos.categoria} precio={productos.precio} 
    handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} open={'open'} img={productos.img}
    />
  );

*/




  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>         
        <h1>Velas</h1>
        
        <Menu/>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        {/*<!--Aca va teexto>*/}        
        
        <Box sx={{display:'block'}}>
           
        {velas}  
        </Box>
        
           </Main>

      {/*A partir de aca esta el cajon que se abre*/}
      <Drawer 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
        
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <p>Tuvieja</p> : <p>Volver</p>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <h5>Iconos</h5>
        <Divider />        
        {details}
        <Divider/>
        <Button onClick={()=>handleDrawerClose()}>Cerrar </Button>
        <Divider/>
      </Drawer>
    </Box>
  );
}
