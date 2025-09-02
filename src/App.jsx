import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarBts from "./components/NavBarBts";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
//importamos el provider para dar acceso a nuestros componentes al contexto
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider> 
      <NavBarBts />
      <Routes>
        {/* Ruta principal - catálogo completo */}
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="*" element={<h2 className="text-center mt-4">404 - Página no encontrada</h2>}/>
      </Routes>
    </CartProvider> 
    </BrowserRouter>
  );
}

export default App;
