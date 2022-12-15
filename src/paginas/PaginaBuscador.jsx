import {Container} from "@mui/material";
import Buscador from '../components/Buscador/Buscador';
import Logo from '../components/Logo/Logo';
import './PaginaBuscador.css'
import Loading from "../components/Loading/Loading"; 
import Paginador from "../components/Paginador/Paginador";
import { ListaNoticias } from "../components/Noticias/Noticia";
import { getListadoNoticias } from "../servicios/noticias";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";


const PaginaBuscador = () => {
  const [noticias, setNoticias] = useState();
  const [isLoading, setIsLoading] =useState(false);
  const [cantidadPaginas, setCantidadPaginas] = useState(1);
  const [pagina, setPagina] = useState(1);
  const [searchParams, setSearchParams]= useSearchParams();

  useEffect(() => {
    if (searchParams.get('query')) {
        buscarNoticia(pagina)
    }
  }, [searchParams, pagina]);

  const buscarNoticia = async () => {
    setIsLoading(true);
    const {articles: notis, totalResults} = await getListadoNoticias(searchParams.get('query'), pagina);
    setNoticias(notis);
    if (parseInt(totalResults)<=100) {
    setCantidadPaginas(Math.ceil(parseInt(totalResults)/10))
    } else {
      setCantidadPaginas(10);
    };
    setIsLoading(false);
  }

  const onBuscar = (criterioBusqueda) => {
    setSearchParams({query: criterioBusqueda});
  };

  const onCambioPagina = (pagina) => {
    setPagina(pagina);
  };


    return ( 
            <main >
                <header className='pagina-buscador-logo'>
              <Logo/>
            </header>
            <Container maxWidth='sm'>
            <Buscador onBuscar={onBuscar}/>
            {isLoading && <Loading />}
            {noticias && <ListaNoticias noticias={noticias}/>}
            {noticias && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina}/>}
            </Container>
                
            <footer >
              <h3 className='pagina-buscador' >Copyright</h3>
            </footer>
            </main>
    )
};

export default PaginaBuscador;