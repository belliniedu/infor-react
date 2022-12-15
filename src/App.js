import './App.css';
import PaginaBuscador from './paginas/PaginaBuscador';
import PaginaDetalle from './paginas/PaginaDetalle';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Error404 from './components/Errores/404';
import Noticia from './components/Noticias/Noticia';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaBuscador/>,
    errorElement: <Error404/>,
  },
  {
    path: "/noticia",
    element: <Noticia/>,
  },
  {
    path: "/noticias/:id",
    element: <PaginaDetalle />,
  },
]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
  </div>
  );
}

export default App;

