import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Cards from '../Components/Cards'
import Menu from '../Components/Menu';
import Details from '../Components/Details';


//Largo del Drawer
const drawerWidth = 750;

//hardcodeo esta hueva
const productosL = [{id:1, Titulo:'Vela Floreada', categoria:'Vela', precio:'300'},
                        {id:2,Titulo:'Vela de Bano',categoria:'Vela', precio:'200'},
                        {id:3,Titulo:'Vela Aromatica',categoria:'Vela', precio:'3100'},
                        {id:4,Titulo:'Tu bieja',categoria:'carajo dijo la princesa', precio:'Mucho'},
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

  const handleDrawerOpen = () => {   // funcion abrir
    setOpen(true);
    
  };

  const handleDrawerClose = () => { // funcion cerrar
    setOpen(false);
  };

  const misProductos = productosL.map((productos) =>  // aca itero productos  para poder verlos, esto se va a ir el dia que tenga un backend y le paso las funciones de abrir cerrar y el estado.
    <Cards id={productos.id} titulo={productos.Titulo} categoria ={productos.categoria} precio={productos.precio} 
    handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} open={open}
    />);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>         
          <Menu/>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }} //Esto esconde el menu hamburguesa ojo porque lo vamos a necesitar para la funcionalidad del boton
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        {/*<!--Aca va teexto>*/}
        <h1>Leichulis</h1>
        {misProductos}
      
      {/*<button onClick={handleDrawerOpen}>Details</button>*/}
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
            {theme.direction === 'rtl' ? <p>Tuvieja</p> : <p>Aca titulo copado</p>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <h5>Aca subtitulo copado</h5>
        <Divider />
        <Details/>
      </Drawer>
    </Box>
  );
}
