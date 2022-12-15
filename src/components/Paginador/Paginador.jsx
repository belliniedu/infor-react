import {Pagination} from "@mui/material"

const Paginador = ({
    cantidadPaginas,
    onChange
}) => {
    const cambiaPagina = (_evento, pagina) => {
        onChange(pagina);
    };
    return (
    <Pagination 
        count={cantidadPaginas} 
        color="primary" 
        onChange={cambiaPagina}
    />
    );
}

export default Paginador;