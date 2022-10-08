import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PrimaryButton from './PrimaryButton';
import '../Styles/cardStyles.css';

export default function BasicCard(props) {
 
 
      const {id,categoria,titulo,precio,handleDrawerOpen, handleDrawerClose, open} = props
      console.log(id)

      return (

    <div className='tuvieja'>      
      <Card sx={{ maxWidth: 445 }}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {id}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {categoria}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {precio}            
          </Typography>
          <button onClick={open ? handleDrawerOpen: handleDrawerClose} >details</button>          
          <PrimaryButton id={id} handleDrawerOpen={handleDrawerOpen}/>                   
        </CardContent>
    </Card>
    
    </div>
  );
}
