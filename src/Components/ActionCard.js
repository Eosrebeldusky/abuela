import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function ActionCard(props) {

 const {titulo, categoria, precio, descripcion,drawerWidth,img } = props
 
  return (
    <Card sx={{ maxWidth: drawerWidth }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="vela detalle"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {categoria}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {descripcion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <WhatsAppIcon/>      
    </Card>
  );
}
