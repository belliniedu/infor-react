
import Buscador from '../components/Buscador/Buscador';
import Logo from '../components/Logo/Logo';
import './PaginaBuscador.css'
const PaginaBuscador = () => {
    return ( 
            <main >
                <header className='pagina-buscador-logo'>
              <Logo/>
            </header>
              <Buscador />
                
            <footer >
              <h3 className='pagina-buscador' >Copyright</h3>
            </footer>
            </main>
    )
};

export default PaginaBuscador;