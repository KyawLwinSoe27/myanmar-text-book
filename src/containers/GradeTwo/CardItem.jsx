import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions, } from '@mui/material';

const CardItem = ({name,image,url}) => {
  return (
    <Card sx={{margin: '10px'}}>
      <CardActionArea>
        <CardMedia
        id="img"
          component="img"
          height="210"
          width="210"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={url}>
            Download
        </a>
      </CardActions>
    </Card>
  )
}

export default CardItem;