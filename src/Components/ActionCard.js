import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReturnButton from './ReturnButton';
export default function ActionCard(props) {

 const {Titulo, categoria, precio, descripcion,open, drawerWidth } = props
  return (
    <Card sx={{ maxWidth: drawerWidth }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Titulo}
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
