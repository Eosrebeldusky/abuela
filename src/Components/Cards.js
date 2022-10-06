import * as React from 'react';
import Card from '@mui/material/Card';
import {Link} from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PrimaryButton from './PrimaryButton';
import '../Styles/cardStyles.css';
import { Button } from '@mui/material';
export default function BasicCard(props) {
   

 
      const id = props.id
      console.log(id)

      return (

    <div className='tuvieja'>      
      <Card sx={{ maxWidth: 445 }}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {id}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.categoria}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.precio}            
          </Typography>
          <PrimaryButton id={id}/>
          
          
        </CardContent>
    </Card>
    
    </div>
  );
}
