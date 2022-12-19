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

const Noticia = ({
    noticia

  }) => {
        const fecha = DateTime.fromISO(noticia.publishedAt.toString());
      return (
          <Card sx={{ width: 700, marginBottom: 5 }}>
          <Link href={noticia.url} underline="none" target="_blank"><CardActionArea >
          <CardMedia
            component="img"
            height="140"
            width={250}
            sx={{ width: 100, heigth: 30, float: 'right'}}
            image={noticia.urlToImage  === '' ? DEFAULT_IMAGE : noticia.urlToImage}
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
              Publicado el: {fecha.toFormat('dd-mm-yyyy')} a las {fecha.toFormat('hh:yy')} hs
            </Typography>
          </CardContent>
        </CardActionArea></Link>
      </Card>
      )
  }


export const ListaNoticias = ({noticias}) => {
    return noticias.map((noticia) => {
      return <article className="noticia"><Noticia noticia={noticia}/>
              </article>
    })
  }

export default Noticia;