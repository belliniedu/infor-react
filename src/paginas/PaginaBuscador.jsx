import {Container} from "@mui/material";
import { useEffect, useState } from "react";
import Buscador from '../components/Buscador/Buscador';
import Logo from '../components/Logo/Logo';
import './PaginaBuscador.css'
import Loading from "../components/Loading/Loading"; 
import Paginador from "../components/Paginador/Paginador";
import { ListaNoticias } from "../components/Noticias/Noticia";
import { getBusquedaNoticias } from "../servicios/noticias";
import { useSearchParams } from "react-router-dom";

const PaginaBuscador = () => {

  const [noticias, setNoticias] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [cantidadPaginas, setCantidadPaginas] = useState(1);
  const [pagina, setPagina] =useState(1);
  const [searchParams, setSearchParams]= useSearchParams();

  useEffect(()=> {
      if(searchParams.get('query')){
          buscarNoticia(pagina)
      }
  }, [searchParams, pagina]);

  const buscarNoticia = async () => {
      setIsLoading(true);
      const { Search: notis, totalResults } = await getBusquedaNoticias(searchParams.get('query'), pagina);
      setNoticias(notis);
      setCantidadPaginas(Math.ceil(parseInt(totalResults)/10))
      setIsLoading(false);        
  }

  const onBuscar = async (criterioBusqueda) => {
      setSearchParams({ query: criterioBusqueda });
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
            { isLoading && <Loading />}
            { noticias && <ListaNoticias noticias={noticias}/>}
            { noticias && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina}/>} 
            </Container>
                
            <footer >
              <h3 className='pagina-buscador' >Copyright</h3>
            </footer>
            </main>
    )
};

export default PaginaBuscador;