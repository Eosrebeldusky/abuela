import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import '../Styles/cardStyles.css';

export default function BasicCard(props) {
   


  return (
    <div className='tuvieja'>
      
      <Card sx={{ maxWidth: 445 }}>       
        <CardContent>

        
        
          <Typography gutterBottom variant="h5" component="div">            
            {props.categoria}
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            {props.titulo}
          </Typography>
        </CardContent>
      
    </Card>
    </div>
  );
}
