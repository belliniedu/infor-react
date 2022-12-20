import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea  from '@mui/material/CardActionArea';
import { DEFAULT_IMAGE} from '../../libs/constantes';
import Link from '@mui/material/Link';
import { DateTime } from 'luxon';
import './Noticia.css'
import { red } from '@mui/material/colors';
import { maxHeight } from '@mui/system';

const Noticia = ({
    noticia

  }) => {
        const fecha = DateTime.fromISO(noticia.publishedAt.toString());
      return (
          <Card sx={{ marginBottom: 5, width: 900, height: 180 , background: 'grey'}} >
          <Link href={noticia.url} underline="none" target="_blank"><CardActionArea >
          <CardMedia
            component="img"
            height="140"
            width={250}
            sx={{ 
              width: 150, 
              heigth: 100, 
              float: 'right',
              marginLeft:2,
              marginRight:2,
              marginTop:2,
              marginBottom:2,
              position:'relative',
              borderRadius:2,
              
            }}
            image={noticia.urlToImage  === '' ? DEFAULT_IMAGE : noticia.urlToImage}
            alt={noticia.title}
          />
          <CardContent sx={{
             width: 750, 
             Height: 180,
             background: 'grey',
             justifyContent:'space-around'
          }}>
            <Typography gutterBottom variant="h5" component="div"
            sx={{fontSize: 22,
              overflow:'hidden',
              height:26,
              color:'#125696',
            }}
            >
              {noticia.title}
            </Typography>
            <Typography variant="body2" color="text.secondary"
              sx={{ height:76,
                marginBottom:2,
                marginTop:2,
               }}>
              {noticia.description}
              
            </Typography>
            <Typography variant="body2" color="text.secondary"
              sx={{
                marginBottom:2,
                marginTop:2,
                position:'relative',
                }}
            >
              Publicado el: {fecha.toFormat('dd-mm-yyyy')} a las {fecha.toFormat('hh:yy')} hs
            </Typography>
          </CardContent>
        </CardActionArea></Link>
      </Card>
      )
  }


export const ListaNoticias = ({noticias}) => {
    return noticias.map((noticia) => {
      return <Noticia noticia={noticia}/>

    })
  }

export default Noticia;