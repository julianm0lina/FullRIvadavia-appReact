import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarBts from "./components/NavBarBts";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBarBts />
      <Routes>
        {/* Ruta principal - catálogo completo */}
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="*" element={<h2 className="text-center mt-4">404 - Página no encontrada</h2>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
