import * as React from 'react';
import Card from '@mui/material/Card';
import {Link} from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import '../Styles/cardStyles.css';



export default function BasicCard(props) {
   
 
      const id= props.id



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
          <Typography variant="body2" color="text.secondary">
            {props.precio}            
          </Typography>          
          <Button variant="contained">Detalles <Link to={"/Details/"+id}> </Link>  </Button>         
        </CardContent>
        
    </Card>
    </div>
  );
}
