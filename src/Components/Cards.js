import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PrimaryButton from './PrimaryButton';
import '../Styles/cardStyles.css';
import { CardMedia } from '@mui/material';
import {storageRef,gsReference} from '../Services/Config'
import { getDownloadURL,getStorage, ref } from 'firebase/storage';


export default function BasicCard(props) {
 
 
      const {key,categoria,titulo, descripcion, precio,handleDrawerOpen, handleDrawerClose,sdk, img } = props


      const [image,setImage]  = React.useState("")
      
      const storage = getStorage();
      getDownloadURL(ref(storage,gsReference))
      .then((url)=>{setImage(url)}
            )
      
      
  return (

    <div className='tuvieja'>      
      <Card sx={{ maxWidth: 445, display:'flex' }}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {key}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {titulo}
          {image}
          </Typography>
          <CardMedia square         
          component="img"
          height="250"
          image={require('../img/car.png')}
          alt="carcito"
        />
          <Typography variant="body2" color="text.secondary">            
            {categoria}
          </Typography>
          <Typography variant="body2" color="text.secondary">            
            {descripcion}
          </Typography>          
          <Typography variant="body2" color="text.secondary">
            {precio}            
          </Typography>                           
          <PrimaryButton sdk={sdk} titulo={titulo} precio={precio} categoria={categoria} descripcion={descripcion} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} open={'open'} />                   
          </CardContent>
    </Card>
    
    </div>
  );
}
