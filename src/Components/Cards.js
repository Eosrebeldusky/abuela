import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PrimaryButton from './PrimaryButton';
import '../Styles/cardStyles.css';
import { CardMedia } from '@mui/material';

export default function BasicCard(props) {
 
 
      const {key,categoria,titulo, descripcion, precio,handleDrawerOpen, handleDrawerClose,sdk, img } = props
            
      return (

    <div className='tuvieja'>      
      <Card sx={{ maxWidth: 445, display:'block' }}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {key}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {titulo}
          </Typography>
          <CardMedia square         
          component="img"
          height="400"
          image={img}
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
