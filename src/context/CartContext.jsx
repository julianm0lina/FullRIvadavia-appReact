import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar items al carrito
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const carritoActualizado = cart.map(prod => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        }
        return prod;
      });
      setCart(carritoActualizado);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Eliminar items del carrito
  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(prod => prod.id !== id));
  };

  // Vaciar el carrito
  const clear = () => setCart([]);

  // Cantidad total de items
  const cartTotal = () => cart.reduce((acc, prod) => acc + prod.quantity, 0);

  // Total a pagar
  const cartTotalPrice = () =>
    cart.reduce((acc, prod) => acc + prod.quantity * prod.precio, 0);

  // Ver si un item ya está en el carrito
  const isInCart = (id) => cart.some(prod => prod.id === id);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, cartTotal, cartTotalPrice, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
