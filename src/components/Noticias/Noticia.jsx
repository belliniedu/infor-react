import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea  from '@mui/material/CardActionArea';
import { DEFAULT_IMAGE, NA } from '../../libs/constantes';
import { useNavigate } from 'react-router-dom';

const Noticia = ({
    noticia

  }) => {

      return (
          <Card sx={{ width: 600, marginBottom: 10 }}>
          <CardActionArea >
          <CardMedia
            component="img"
            height="140"
            width={250}
            image={noticia.urlToImage  === 'N/A' ? DEFAULT_IMAGE : noticia.urlToImage}
            alt={noticia.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {noticia.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {noticia.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {noticia.publishedAt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      )
  }


export const ListaNoticias = ({noticias}) => {
    return noticias.map((noticia) => {
      return <Noticia noticia={noticia}/>
    })
  }

export default Noticia;