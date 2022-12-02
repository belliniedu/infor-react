import './App.css';
import Logo from './components/Logo';
import PaginaBuscador from './paginas/PaginaBuscador';

function App() {
  return (
    <div className="App">
            <header>
              <Logo />
            </header>
            <body>
              <PaginaBuscador />
            </body>
            <footer>
              <h3>Copyright</h3>
            </footer>
  
    </div>
    
  );
}

export default App;
