import './Resultados.css'
const Resultados = (props) => {

return <h5 className="resultados">Está viendo 10 noticias de {props.totalResults} resultados.</h5>
};

export default Resultados;