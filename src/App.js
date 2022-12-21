import './App.css';
import PaginaBuscador from './paginas/PaginaBuscador';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Error404 from './components/Errores/404';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaBuscador/>,
    errorElement: <Error404/>,
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

