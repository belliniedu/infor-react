const API_KEY = 'c09793934889432f9693f25391d366d1';
const NEW_API = 'https://newsapi.org/v2/everything';
const LANGUAGE = 'es';
const PAGE_SIZE = '10';

export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${NEW_API}?q=${criterioBusqueda}&apikey=${API_KEY}&page=${paginaActual}&pageSize=${PAGE_SIZE}&language=${LANGUAGE}`);
    const noticias = await respuesta.json();
    return noticias;
}








